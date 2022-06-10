export class ScannedImage {
  base64: string;
  name: string;
  size: number;
  mimetype?: string;
  constructor() {}

  getUrl(): string {
    // return "data:image/jpeg;base64," + this.base64;
    return `data:${this.mimetype || "image/jpeg"};base64,${this.base64}`;
  }
}
