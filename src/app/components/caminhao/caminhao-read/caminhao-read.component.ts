import { Component, OnInit } from '@angular/core';
import { Caminhao } from '../Caminhao.model';
import { CaminhaoService } from '../CaminhaoService';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-caminhao-read',
  templateUrl: './caminhao-read.component.html',
  styleUrls: ['./caminhao-read.component.css']
})
export class CaminhaoReadComponent implements OnInit {

  caminhao: Caminhao []
  displayedColumns = ['id', 'modelo', 'anoFabricacao', 'anoModelo','action']

  constructor(private CaminhaoService: CaminhaoService) { }

  ngOnInit(): void {
    this.CaminhaoService.read().subscribe(products => {
      this.caminhao = products;
      console.log(products);
    })
  }

}
