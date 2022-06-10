import { ControleAcessoService } from "./../../service/controle-acesso.service";
import { Directive, ElementRef, OnInit, Input } from "@angular/core";
import { Role } from "../../model/enum/role.enum";

@Directive({
  selector: "[appHasRole]"
})
export class HasRoleDirective implements OnInit {

  @Input() appHasRole: string;

  public roles: any;

  constructor(private el: ElementRef, private controleAcesso: ControleAcessoService) {
  }
  ngOnInit(): void {
    this.controleAcesso.getRoles().then(data => {
      this.roles = data;
      this.el.nativeElement.hidden = !this.roles.includes(Role[this.appHasRole]);
    }
    )
  }


}
