import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Issue } from 'src/app/interfaces/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private issueService: IssueService, private router: Router) { }
  @Output() emitIssue = new EventEmitter<Issue>();
  bool: boolean = false;
  issues: Issue[] | undefined;
  ngOnInit(): void {
    this.issueService.getAllIssues().subscribe((issues) => this.issues = issues)
  }

  navigateToForm(){
    this.router.navigate(['/issueForm']);  
  }


}
