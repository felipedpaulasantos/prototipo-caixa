import {
  Component,
  Input,
  ViewChild,
  SimpleChanges,
  OnChanges
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { SafeUrl, DomSanitizer } from "@angular/platform-browser";
import { Account } from "../../account";
import { WhatsappApiService } from "src/app/whatsapp-api/whatsapp-api.service";

@Component({
  selector: "app-profile-photo-form",
  templateUrl: "./profile-photo-form.component.html",
  styleUrls: ["./profile-photo-form.component.css"]
})
export class ProfilePhotoFormComponent implements OnChanges {
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private whatsappService: WhatsappApiService,
    private domSanitizer: DomSanitizer
  ) {}

  @ViewChild("photoPreview", { static: false }) photoPreview;
  @Input() account: Account;
  @Input() photo: string;
  photoUrl: SafeUrl;
  selectedFile: File = null;

  profilePhotoForm = this.fb.group({
    profileImage: [null, [Validators.required]]
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.setPhoto();
  }

  setPhoto() {
    if (!this.photo) {
      this.photoUrl = null;
      return;
    }
    const safeUrl = this.domSanitizer.bypassSecurityTrustUrl(this.photo);
    this.photoUrl = safeUrl;
  }

  onFileChanged(event) {
    if (event.target.files[0].type.slice(0, 5) != "image") {
      return this.toastr.warning("Arquivo selecionado não é uma imagem!");
    }
    this.selectedFile = event.target.files[0] as File;
    const objectUrl = window.URL.createObjectURL(this.selectedFile);
    const safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(objectUrl);
    this.photoUrl = safeUrl;
  }

  submitPhoto() {
    if (!this.selectedFile) {
      return this.toastr.warning("Escolha uma imagem!");
    }

    this.whatsappService
      .updateAccountPhoto(
        this.selectedFile,
        this.selectedFile.type,
        this.account.id
      )
      .subscribe(
        (response: any) => {
          if (response && response.errors) {
            return this.toastr.error(
              `Erro na requisição:<br> ${response.errors[0].details}`
            );
          }
          return this.toastr.success("Imagem atualizada com sucesso");
        },
        (err: Error) =>
          this.toastr.error(
            `Não foi possível atualizar a imagem:<br> ${err.message}`,
            "Erro"
          )
      );
  }
}
