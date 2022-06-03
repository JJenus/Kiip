import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Snippet } from './snippet';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {
  //class field variables
  public kiipApi = environment.kiipApiUrl+"/snippets";

  constructor(private http: HttpClient) { }

  //class methods
  public getSnippets():Observable<Snippet[]>{
    return this.http.get<Snippet[]>(this.kiipApi)
  }

  public saveSnippet(newSnippet: Snippet):Observable<Snippet>{
    return this.http.post<Snippet>(this.kiipApi, newSnippet);
  }

  public updateSnippet(newSnippet: Snippet):Observable<Snippet>{
    return this.http.put<Snippet>(this.kiipApi, newSnippet);
  }

  public delete(id: number): Observable<void>{
     return this.http.delete<void>(this.kiipApi + "/" + id);
  }
}
