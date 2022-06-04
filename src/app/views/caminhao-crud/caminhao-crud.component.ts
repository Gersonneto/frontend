import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-caminhao-crud',
  templateUrl: './caminhao-crud.component.html',
  styleUrls: ['./caminhao-crud.component.css']
})
export class CaminhaoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Caminhões',
      icon: 'storefront',
      routeUrl: '/caminhao'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/caminhao/create'])
  }
}
