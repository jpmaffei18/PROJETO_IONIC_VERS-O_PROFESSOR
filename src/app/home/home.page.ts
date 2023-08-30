import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  /*Atributtos para cima */
title = 'ShoppingList'
image = 'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg';


/* Array do ngFor */
minhaLista = [
  {item: 'Feijão', quant: '2Kg'},
  {item: 'Leite', quant: '3L'},
  {item: 'Batata', quant: '3Kg'}
];



/*Métodos para baixo*/
  constructor() {}


}

