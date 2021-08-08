import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanServiceService {

  private _baseRequestsUrl = "http://localhost:3000/requests"; 
  private _baseUsersUrl = "http://localhost:3000/bank-officers"; 

  constructor(private _http:HttpClient) { }
  getAllRequests():Observable<any>{
    return this._http.get(this._baseRequestsUrl);
  }
  getRequestById(id:number):Observable<any>{
    return this._http.get(`${this._baseRequestsUrl}/${id}`)
  }
  createRequest(data:any):Observable<any>{
    return this._http.post(this._baseRequestsUrl, data);
  }
  updateRequest(id:number, data:any):Observable<any>{
    console.log(id);
    return this._http.put(`${this._baseRequestsUrl}/${id}`, data);
  }
  deleteRequestById(id: number): Observable<any>{
    return this._http.delete(`${this._baseRequestsUrl}/${id}`);
  }

  getAllUsers():Observable<any>{
    return this._http.get(this._baseUsersUrl);
  }
  getUserById(id:number):Observable<any>{
    return this._http.get(`${this._baseUsersUrl}/${id}`)
  }
  createUser(data:any):Observable<any>{
    return this._http.post(this._baseUsersUrl, data);
  }
  updateUser(id:number, data:any):Observable<any>{
    return this._http.put(`${this._baseUsersUrl}/${id}`, data);
  }
  deleteUserById(id: number): Observable<any>{
    return this._http.delete(`${this._baseUsersUrl}/${id}`);
  }

}
