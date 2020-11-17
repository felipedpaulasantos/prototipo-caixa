import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "./components/shared-components.module";
import { ScrollSpyDirective } from './directives/scrollspy.directive';
import { ByteSizePipe } from './pipes/bytesize-pipe';
import { CpfPipe } from './pipes/cpf-pipe';

@NgModule({
  imports: [SharedComponentsModule],
  declarations: [ScrollSpyDirective, ByteSizePipe, CpfPipe],
  exports: [SharedComponentsModule, ScrollSpyDirective, ByteSizePipe, CpfPipe]
})

export class SharedModule {}
