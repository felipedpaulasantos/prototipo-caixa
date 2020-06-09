import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  constructor(private domSanitizer: DomSanitizer) {}

  test(blob) {
    const reader = new FileReader();
    const domSanitizer = this.domSanitizer;
    reader.readAsDataURL(blob);
    const src = (reader.onloadend = function() {
      let base64Data;
      base64Data = reader.result;

      const mySrc = domSanitizer.bypassSecurityTrustUrl(
        "data:image/png;base64," + base64Data
      );
      return mySrc;
    });
    return src;
  }
}
