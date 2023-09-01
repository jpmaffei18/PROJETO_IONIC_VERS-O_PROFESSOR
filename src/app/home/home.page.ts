import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/produto.model';
import { DatabaseService } from '../servico/database.service';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  /*Atributtos para cima */
title = 'ShoppingList'
image = 'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg';


/* Array do ngFor */
minhaLista:Produtos[] = [];
dados = {
  id: "",
  item: "",
  quantidade: ""
};


/*Métodos para baixo*/
  constructor( 
/*Nosso serviçp de banco de dados*/
    private bancoDados: DatabaseService,

    /*Loading*/
    private loadingControl: LoadingController) {
    
    }

  ngOnInit(): void {
  /*Inicia o loading */
   /* this.carregando(); */

  /* Consulta os dados na WebAPI */
    this.bancoDados.consulta().subscribe (results => this.minhaLista = results)
    
  }

/*Método do Loading
  async carregando(){
    const load = this.loadingControl.create({
      mode: 'ios',
      message: 'Marca um 10 aí maluco...',
      duration: 3000
    });
    (await load).present();
  }
*/
  
/*Método de excluir*/
excluir(id: number){
  this.bancoDados.excluir(id)
  setTimeout(this.refresh, 1000) 
}

  // Método de refresh

  refresh(){
    // Função JS - Atualiza a página
    location.reload();
  }

  }


