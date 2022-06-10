import { Component, Input } from "@angular/core";
import { Menu } from "../menu.model";

@Component({
  selector: "app-menu-scroll",
  templateUrl: "./menu-scroll.component.html",
  styleUrls: ["./menu-scroll.component.css"]
})
export class MenuScrollComponent {

  @Input()
  items: Menu[];
  private OFFSET_BLOCO = -140;

  constructor() { }

  public scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + this.OFFSET_BLOCO;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

}
