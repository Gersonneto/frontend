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
    this.CaminhaoService.create(this.caminhao).subscribe(() => {
      this.CaminhaoService.showMessage('Produto Criado!')
      this.router.navigate(['/caminhao'])
    })

  }

  cancel(): void {
    this.router.navigate(['/caminhao'])
  }

}
