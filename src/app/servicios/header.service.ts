import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{ HttpClient }from'@angular/common/http';
import { Observable } from 'rxjs';
import{Usuario} from 'src/app/models/usuario';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
   private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

public getUser():Observable <Usuario> {
  return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1`);
}


public updateUsuario(usuario :Usuario) :Observable<Usuario>{
  return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/update`,usuario);
}

}
