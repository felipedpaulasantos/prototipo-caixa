import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "./components/shared-components.module";
import { ScrollSpyDirective } from './directives/scrollspy.directive';
import { ByteSizePipe } from './pipes/bytesize-pipe';

@NgModule({
  imports: [SharedComponentsModule],
  declarations: [ScrollSpyDirective, ByteSizePipe],
  exports: [SharedComponentsModule, ScrollSpyDirective, ByteSizePipe]
})

export class SharedModule {}
