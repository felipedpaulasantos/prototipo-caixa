import { Injectable } from "@angular/core";
import { createCipheriv } from "browser-crypto";
import { CRYPTO_PARAMS } from "../shared/utils/constants";

@Injectable({
    providedIn: "root"
  })
export class CriptografiaService {

    encryptAES(text: any): string {
        const CIPHER = createCipheriv(CRYPTO_PARAMS.algorithm, CRYPTO_PARAMS.key, CRYPTO_PARAMS.iv);
        let encrypted = CIPHER.update(text, CRYPTO_PARAMS.input_encoding, CRYPTO_PARAMS.output_encoding);
        encrypted += CIPHER.final(CRYPTO_PARAMS.output_encoding);
        const TAG = CIPHER.getAuthTag().toString(CRYPTO_PARAMS.output_encoding);
        return TAG.toString() + encrypted;
    }

}
