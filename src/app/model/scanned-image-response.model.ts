import { ScannedImage } from "./scanned-image.model";

export class ScannedImageResponse {
  scannedImageList: ScannedImage[];
  ok: boolean;
  error: string;
  stackTrace: string;

  constructor() {
    /*         this.scannedImageList = new Array<ScannedImage>(); */
  }
}
