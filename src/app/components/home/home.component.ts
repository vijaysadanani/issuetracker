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
  openIssues: Issue[] | undefined;
  closedIssues: Issue[] | undefined;
  openIssueCount: number | undefined;
  closedIssueCount: number | undefined;
  openPercentage: number | undefined;
  searchTerm: string  = "";
  found: any[] | undefined;

  ngOnInit(): void {
    this.issueService.getAllIssues().subscribe((issues) => {
      this.issues = issues; 
      this.openIssues = this.issues?.filter((obj) => obj.status === 'open');
      this.closedIssues = this.issues?.filter((obj) => obj.status === 'closed');
      this.openIssueCount = this.openIssues.length;
      this.closedIssueCount = this.closedIssues.length;
      this.openPercentage = (this.openIssueCount / (this.openIssueCount + this.closedIssueCount)) * 100;
    });
  }

  navigateToForm(){
    this.router.navigate(['/issueForm']);  
  }

  closeIssue(issue: Issue) {
    issue.status = 'closed';
    this.issueService.updateIssue(issue).subscribe();
    this.ngOnInit();
  }

  filter(searchTerm: string){
    this.found = this.issues?.filter(function(element) {
    return element.status.toLowerCase() == searchTerm.toLowerCase();
  });
  }

  filterAssignee(searchTerm: string){
    this.found = this.issues?.filter(function(element) {
    return element.assignee.toLowerCase() == searchTerm.toLowerCase();
  });
  }

  clearFilter() {
    this.searchTerm = "";
    this.found = undefined;
  }
}
