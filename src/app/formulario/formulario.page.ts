import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  
/*Atributos para cima */
  title = "Formulário";
  image = "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg";
/* Botão */
  nameButton= "Cadastrar";

/*atributo que guarda os dados do formulário */
form! :FormGroup;



/*Métodos para baixo*/

/*Precisamos injetar a ferramenta formbuilder
  A função do formbuilder é criar e validar os campos do formulário*/

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    // Inicializar o método validaForm
    this.validaForm();
  }

  /* Método de criação e validção do formulário */
  validaForm(){
    this.form = this.formBuilder.group({
      item: ['',[Validators.required, Validators.minLength(3)]], 
      quantidade: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
    })
  }
}
