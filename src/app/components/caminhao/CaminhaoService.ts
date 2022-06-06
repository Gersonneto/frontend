import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Caminhao } from './Caminhao.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaminhaoService {

  baseUrl = environment.api+"api/caminhoes";
  private msgQueue = [];

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }


  create(caminhao: Caminhao): Observable<Caminhao> {
    return this.http.post<Caminhao>(this.baseUrl+"/cadastrar", caminhao).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY; 
  }

  read(): Observable<Caminhao[]> {
    return this.http.get<Caminhao[]>(this.baseUrl)
  }

  readById(id: number): Observable<Caminhao> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Caminhao>(url)
  }

  update(caminhao: Caminhao): Observable<Caminhao> {
    const url = `${this.baseUrl}/atualizar`
    return this.http.put<Caminhao>(url, caminhao)
  }

  delete(id: number): Observable<Caminhao> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Caminhao>(url)
  }
}
