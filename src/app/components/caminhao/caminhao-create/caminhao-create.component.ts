import { Component, OnInit } from '@angular/core';
import { CaminhaoService } from '../CaminhaoService';
import { Router } from '@angular/router';
import { Caminhao } from '../Caminhao.model';

@Component({
  selector: 'app-caminhaoCreateComponent-create',
  templateUrl: './caminhao-create.component.html',
  styleUrls: ['./caminhao-create.component.css']
})
export class CaminhaoCreateComponent implements OnInit {

  caminhao: Caminhao = {
    id : 0,
    modelo : "",
    anoFabricacao: "",
    anoModelo: ""
  }

  constructor(private CaminhaoService: CaminhaoService, private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    
  if (this.validacao()){
    this.CaminhaoService.create(this.caminhao).subscribe(() => {
      this.CaminhaoService.showMessage('Produto Criado!')
      this.router.navigate(['/caminhao'])
    })
  }

  }

  cancel(): void {
    this.router.navigate(['/caminhao'])
  }
  validacao():boolean{
    
    var validar =true;
    var mensagem="";
    if (this.caminhao.anoModelo ==""|| this.caminhao.anoFabricacao==""|| this.caminhao.modelo=="")
    {
      validar = false;
      mensagem='Todos os campos são obrigatórios! ';
     // this.CaminhaoService.showMessage(mensagem,true); 
     }
    if (this.caminhao.modelo!="FH" && this.caminhao.modelo != "FM")
    {
      validar=false;
     
         
      mensagem +='O modelo do caminhão deverá ser FM Ou FH!';
      //this.CaminhaoService.showMessage(mensagem,true); 
     }
    if (this.caminhao.anoFabricacao.length!= 4 && isNaN(Number(this.caminhao.anoFabricacao))==false)
    {
     
        validar=false;
       
          
        mensagem +='O ano de Fabricação não é valido !';
        //this.CaminhaoService.showMessage(mensagem,true); 
           
    }
    if (this.caminhao.anoModelo.length!= 4 && isNaN(Number(this.caminhao.anoModelo))==false)
    {      
        validar=false;
        
          
         mensagem +='O ano do Modelo não é valido !';  
         //this.CaminhaoService.showMessage(mensagem,true);    
           
    }
    if (!validar)
    {
      this.CaminhaoService.showMessage(mensagem,true); 
    }
    
  return validar;
  }

}
