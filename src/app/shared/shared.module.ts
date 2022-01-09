import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "./components/shared-components.module";
import { ScrollSpyDirective } from "./directives/scrollspy.directive";
import { ByteSizePipe } from "./pipes/bytesize-pipe";
import { CpfPipe } from "./pipes/cpf-pipe";
import { RippleDirective } from "./directives/ripple.directive";

@NgModule({
  imports: [SharedComponentsModule],
  declarations: [ScrollSpyDirective, ByteSizePipe, CpfPipe, RippleDirective],
  exports: [SharedComponentsModule, ScrollSpyDirective, ByteSizePipe, CpfPipe, RippleDirective]
})

export class SharedModule {}
