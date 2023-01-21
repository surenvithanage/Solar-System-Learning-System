import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public common_url = `http://localhost:8080`;

  constructor(
    private http: HttpClient
  ) { }

  login(payload: any) {
    return this.http.post(`${this.common_url}` + '/login', payload);
  }

  register(payload: any) {
    return this.http.post(`${this.common_url}` + '/user', payload);
  }

  endpoint() {
    return this.http.get(`${this.common_url}` + '/endpoint');
  }

  faq() {
    return this.http.get(`${this.common_url}` + '/faq');
  }

  contact(payload: any) {
    return this.http.post(`${this.common_url}` + '/contactus', payload);
  }

  topics() {
    return this.http.get(`${this.common_url}` + '/topic');
  }

  subtopics(payload) {
    return this.http.post(`${this.common_url}` + '/subtopic/find', payload);
  }

  quiz() {
    return this.http.get(`${this.common_url}` + '/quiz');
  }

  
  quizList(payload: any) {
    return this.http.post(`${this.common_url}` + '/progress/find', payload);
  }

    
  progress(payload: any) {
    return this.http.post(`${this.common_url}` + '/progress', payload);
  }

  updateProgress(payload: any) {
    return this.http.put(`${this.common_url}` + '/progress', payload);
  }
}
