import { Component } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";

@Component({
    selector: "app-activation-form",
    templateUrl: "./activation-form.component.html"
})
export class ActivationFormComponent {

    constructor(
        private fb: FormBuilder
    ) {}

    activationForm = this.fb.group({
        countryCode: [null, Validators.required],
        phone: [null, Validators.required],
        channel: [null],
        cert: [null]
    });

    codeSendForm = this.fb.group({
        code: [null, Validators.required]
    });
}
