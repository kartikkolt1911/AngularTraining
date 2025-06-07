import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/user-info-model';

const baseUrl = 'http://localhost:5063/user';
const baseUrlGet = 'http://localhost:5063/user?username='

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(baseUrl);
  }

  get(username: string): Observable<UserInfo> {
    return this.http.get<UserInfo>(`${baseUrlGet}${username}`);
  }

  create(data: UserInfo): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}