import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Issue } from '../interfaces/issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private httpClient: HttpClient) { }

  getAllIssues(): Observable<Issue[]> {
    return this.httpClient.get<Issue[]>(environment.apiEndpoint, {headers: { "x-apikey": environment.apiKey }});
  }

  createIssue(issue: Issue): Observable<any> {
    return this.httpClient.post(environment.apiEndpoint, issue, {headers: {"Content-Type": "application/JSON", "x-apikey": environment.apiKey}});
  }
}
