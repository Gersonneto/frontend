import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaminhaoService } from '../CaminhaoService';
import { Caminhao } from '../Caminhao.model';

@Component({
  selector: 'app-caminhao-update',
  templateUrl: './caminhao-update.component.html',
  styleUrls: ['./caminhao-update.component.css']
})
export class CaminhaoUpdateComponent implements OnInit {

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

  updatecaminhao(): void {
    this.CaminhaoService.update(this.caminhao).subscribe(() => {
      this.CaminhaoService.showMessage('Produto Atualizado!')
      this.router.navigate(['/caminhao'])
    })
  }

  cancel(): void {
    this.router.navigate(['/caminhao'])
  }
}
