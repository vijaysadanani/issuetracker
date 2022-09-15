import { Component, OnInit } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { Issue } from 'src/app/interfaces/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issueform',
  templateUrl: './issueform.component.html',
  styleUrls: ['./issueform.component.css']
})
export class IssueformComponent implements OnInit {

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit(): void {
  }
  issue: Issue = {
    assignee: '',
    description: '',
    status: ''
  };

  addIssue(){
    this.issueService.createIssue(this.issue).subscribe();
    this.router.navigate(['/home']);
  }
}
