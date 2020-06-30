import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "./components/shared-components.module";
import { ScrollSpyDirective } from './directives/scrollspy.directive';

@NgModule({
  imports: [SharedComponentsModule],
  declarations: [ScrollSpyDirective],
  exports: [SharedComponentsModule, ScrollSpyDirective]
})

export class SharedModule {}
