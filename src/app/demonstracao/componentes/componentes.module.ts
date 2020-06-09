import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes.component';
import { CardsComponent } from './cards/cards.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { BotoesComponent } from './botoes/botoes.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { TabelasComponent } from './tabelas/tabelas.component';

@NgModule({
  imports: [
    ComponentesRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule
  ],
  declarations: [
    ComponentesComponent,
    CardsComponent,
    BotoesComponent,
    MensagensComponent,
    FormulariosComponent,
    TabelasComponent
  ],
  exports: [
    CardsComponent,
    BotoesComponent,
    MensagensComponent
  ]
})
export class ComponentesModule { }
