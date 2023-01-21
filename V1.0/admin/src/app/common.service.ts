import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public endpoint = `http://localhost:8080`;

  constructor(
    private http: HttpClient
  ) { }

  public loadUserList(): Observable<any> {
    return this.http.get(`${this.endpoint}` + '/user');
  }

  public loadRoleList(): Observable<any> {
    return this.http.get(`${this.endpoint}` + '/role');
  }

  public loadEndpointList(): Observable<any> {
    return this.http.get(`${this.endpoint}` + '/endpoint');
  }

  public loadFaqList(): Observable<any> {
    return this.http.get(`${this.endpoint}` + '/faq');
  }

  public loadProgressList(): Observable<any> {
    return this.http.get(`${this.endpoint}` + '/progress/detailed');
  }

  public loadQuizList(): Observable<any> {
    return this.http.get(`${this.endpoint}` + '/quiz');
  }

  public loadTopicList(): Observable<any> {
    return this.http.get(`${this.endpoint}` + '/topic');
  }

  public loadSubTopicList(): Observable<any> {
    return this.http.get(`${this.endpoint}` + '/subtopic');
  }

  public login(user: any): Observable<any> {
    return this.http.post(`${this.endpoint}` + '/login', user);
  }

  public register(user: any): Observable<any> {
    return this.http.post(`${this.endpoint}` + '/user', user);
  }

  public createUser(user: any): Observable<any> {
    return this.http.post(`${this.endpoint}` + '/user', user);
  }

  public updateUser(user: any): Observable<any> {
    return this.http.put(`${this.endpoint}` + '/user', user);
  }

  public deleteUser(user: any): Observable<any> {
    return this.http.delete(`${this.endpoint}` + '/user', { body: user });
  }

  public createRole(payload: any): Observable<any> {
    return this.http.post(`${this.endpoint}` + '/role', payload);
  }

  public updateRole(payload: any): Observable<any> {
    return this.http.put(`${this.endpoint}` + '/role', payload);
  }

  public deleteRole(payload: any): Observable<any> {
    return this.http.delete(`${this.endpoint}` + '/role', { body: payload });
  }

  public createEndpoint(payload: any): Observable<any> {
    return this.http.post(`${this.endpoint}` + '/endpoint', payload);
  }

  public updateEndpoint(payload: any): Observable<any> {
    return this.http.put(`${this.endpoint}` + '/endpoint', payload);
  }

  public deleteEndpoint(payload: any): Observable<any> {
    return this.http.delete(`${this.endpoint}` + '/endpoint', { body: payload });
  }

  public createFaq(payload: any): Observable<any> {
    return this.http.post(`${this.endpoint}` + '/faq', payload);
  }

  public updateFaq(payload: any): Observable<any> {
    return this.http.put(`${this.endpoint}` + '/faq', payload);
  }

  public deleteFaq(payload: any): Observable<any> {
    return this.http.delete(`${this.endpoint}` + '/faq', { body: payload });
  }
  
  public updateProgress(payload: any): Observable<any> {
    return this.http.put(`${this.endpoint}` + '/progress', payload);
  }

  public deleteProgress(payload: any): Observable<any> {
    return this.http.delete(`${this.endpoint}` + '/progress', { body: payload });
  }
  
  public createQuiz(payload: any): Observable<any> {
    return this.http.post(`${this.endpoint}` + '/quiz', payload);
  }

  public updateQuiz(payload: any): Observable<any> {
    return this.http.put(`${this.endpoint}` + '/quiz', payload);
  }

  public deleteQuiz(payload: any): Observable<any> {
    return this.http.delete(`${this.endpoint}` + '/quiz', { body: payload });
  }
  
  public createTopic(payload: any): Observable<any> {
    return this.http.post(`${this.endpoint}` + '/topic', payload);
  }

  public updateTopic(payload: any): Observable<any> {
    return this.http.put(`${this.endpoint}` + '/topic', payload);
  }

  public deleteTopic(payload: any): Observable<any> {
    return this.http.delete(`${this.endpoint}` + '/topic', { body: payload });
  }
    
  public createSubTopic(payload: any): Observable<any> {
    return this.http.post(`${this.endpoint}` + '/subtopic', payload);
  }

  public updateSubTopic(payload: any): Observable<any> {
    return this.http.put(`${this.endpoint}` + '/subtopic', payload);
  }

  public deleteSubTopic(payload: any): Observable<any> {
    return this.http.delete(`${this.endpoint}` + '/subtopic', { body: payload });
  }
}
