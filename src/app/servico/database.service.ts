import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

/* Atributo somente leitura */
readonly API = 'http://localhost:3000/produtos/'; 


/* Nosso  tradutor HTTP */
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }


  /* Método de consulta */
  consulta(){

    /* Retorna os dados consultados na WebAPI */
    return this.http.get<Produtos[]>(this.API);
  }


  /* Método de cadastro */
  cadastro(form:any){
   return this.http.post(this.API, form, this.httpOptions).subscribe();
  }


  /* Método de editar */
  editar(dados: any, id:any){
    return this.http.put(this.API + id, dados, this.httpOptions).subscribe();
  }
  


  /* Método de excluir */
  excluir(id: any){
    return this.http.delete(this.API +id).subscribe();
  }

}
