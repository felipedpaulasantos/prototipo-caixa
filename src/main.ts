import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

//import { KeycloakService } from "./app/keycloak-service/keycloak.service";

if (environment.production) {
  enableProdMode();
}

/* if (environment.production === false) {
  if (window) {
    (window.console.log) => {

    }
  }
} */

platformBrowserDynamic()
.bootstrapModule(AppModule)
.catch(err => console.log(err));

// KeycloakService.init(environment.ssoConfig, { onLoad: "login-required" })
//   .then(() => {
//     platformBrowserDynamic()
//       .bootstrapModule(AppModule)
//       .catch(err => console.log(err));
//   })
//   .catch((e: any) => {
//     console.log("Error in bootstrap: " + e);
//   });
