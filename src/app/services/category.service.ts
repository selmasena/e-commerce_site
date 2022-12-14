import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable ,throwError } from 'rxjs';
import { Category } from '../category/category';
import {tap} from 'rxjs/operators'
@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }
  path= "http://localhost:3000/categories"

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.path).pipe(
     //Hata yakalama
     
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }

  handleError(err:HttpErrorResponse)
  {let errorMessage=''
if(err.error instanceof ErrorEvent) {
errorMessage='Something went wrong'+err.error.message}
else
{ errorMessage='a system error'}

return throwError(() => new Error(errorMessage))
}
}
