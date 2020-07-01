import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

const TOOLBAR_HEIGHT = 64;

@Injectable()
export abstract class ComponentesInterface {

  constructor(
    public toastr: ToastrService
	) { }

	abstract scrollElement;
	abstract sectionOffset = 0;
	abstract spiedTags: string[];
	abstract currentSection = "";

	scrollTo(section) {
 		document.querySelector('#' + section)
      .scrollIntoView(true);
    window.scrollBy({ top: - TOOLBAR_HEIGHT });
	}

	onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

	copiarConteudo(val: string): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastr.info('Conteúdo copiado!');
	}

	setSectionOffset() {
    if (this.sectionOffset) { return; }
    if (this.scrollElement.nativeElement.getBoundingClientRect()) {
      const rect = this.scrollElement.nativeElement.getBoundingClientRect();
      const sy = -(window.scrollY ? window.scrollY : window.pageYOffset);
      this.sectionOffset = rect.top - sy;
    }
	}

  onScroll(event) {
    this.setSectionOffset();
    let currentSection: string;
    if (!this.scrollElement || !this.scrollElement.nativeElement) { return; }

    const children = this.scrollElement.nativeElement.children;
		const scrollTop = event.target.scrollingElement.scrollTop;
    const parentOffset = event.target.scrollingElement.offsetTop;

/*     console.log("Element", children); */

    if (!children || !scrollTop) { return; }
		for (let i = 0; i < children.length; i++) {
      const element = children[i];

/*       console.log("ID", element.id);
      console.log("SCROLLTOP", scrollTop);
      console.log("OFFSET", this.sectionOffset);
      console.log("OFFSET TOP", element.offsetTop);
      console.log("PARENTOFFSET", parentOffset);
      console.log("OFFSETTOP - PARENT - OFFSET", element.offsetTop - parentOffset - this.sectionOffset);
      console.log("==================="); */

			if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
				if ((element.offsetTop - parentOffset - this.sectionOffset) <= scrollTop) {
					currentSection = element.id;
				}
			}
		}
		if (currentSection !== this.currentSection) {
			this.currentSection = currentSection;
		}
  }

}
