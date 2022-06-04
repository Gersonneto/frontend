import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caminhao } from '../Caminhao.model';
import { CaminhaoService } from '../CaminhaoService';

@Component({
  selector: 'app-caminhao-delete',
  templateUrl: './caminhao-delete.component.html',
  styleUrls: ['./caminhao-delete.component.css']
})
export class CaminhaoDeleteComponent implements OnInit {

  caminhao: Caminhao

  constructor(
    private CaminhaoService: CaminhaoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.CaminhaoService.readById(id).subscribe(caminhao => {
      this.caminhao = caminhao
    })
  }

  deletecaminhao(): void {
    this.CaminhaoService.delete(this.caminhao.id).subscribe(() => {
      this.CaminhaoService.showMessage('Produto excluido!')
      this.router.navigate(['/caminhao'])
    })
  }

  cancel(): void {
    this.router.navigate(['/caminhao'])
  }
}
