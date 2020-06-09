import { FormBuilder, Validators } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
    selector: "app-docker-connection-form",
    templateUrl: "./docker-connection-form.component.html"
})
export class DockerConnectionFormComponent {

    constructor(
        private fb: FormBuilder
    ) {}

    dockerConnectionForm = this.fb.group({
        url: [null, Validators.required],
        username: [null, Validators.required],
        password: [null, Validators.required],
        status: [null]
    });
}
