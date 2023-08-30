import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FormularioPageRoutingModule } from './formulario-routing.module';
import { FormularioPage } from './formulario.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPageRoutingModule,

    /* Data Driven - segunda forma de trabalhar formulario
    ReactiveFormsModule - fornece */
    
    ReactiveFormsModule

  ],
  declarations: [FormularioPage]
})
export class FormularioPageModule {}
