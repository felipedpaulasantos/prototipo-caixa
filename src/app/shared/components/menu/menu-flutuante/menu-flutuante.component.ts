import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { strNotEmpty } from "../../../../shared/utils/utils";
import { Menu } from "../menu.model";

@Component({
    selector: "app-menu-flutuante",
    templateUrl: "./menu-flutuante.component.html",
    styleUrls: ["./menu-flutuante.component.css"]
})
export class MenuFlutuanteComponent implements OnInit {

    @Input()
    items: Menu[];

    @Input()
    contentId: string;

    @Output()
    action: EventEmitter<any> = new EventEmitter();

    private OFFSET_BLOCO = -140;

    constructor() { }

    ngOnInit() {
        this.scroll();
    }

    public scrollTo(id: string): void {
        if (strNotEmpty(id)) {
            const element = document.getElementById(id);
            if (element) {
                const y = element.getBoundingClientRect().top + window.pageYOffset + this.OFFSET_BLOCO;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    }

    public scroll(): void {
        const contentId = this.contentId.toString();
        window.addEventListener("scroll", function () {
            const pageY = window.pageYOffset;
            const menu = document.getElementById("menu-scroll");
            const content = window.document.getElementById(contentId);
            if (!menu || !content) {
                return;
            }
            if (pageY >= 400) {
                menu.classList.remove("d-none");
                content.classList.add("padding-right-27");
            } else {
                menu.classList.add("d-none");
                content.classList.remove("padding-right-27");
            }
        });
    }

    callAction(action) {
        if (strNotEmpty(action)) {
            this.action.emit(action);
        }
    }

}
