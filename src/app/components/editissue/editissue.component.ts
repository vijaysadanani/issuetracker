import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from 'src/app/interfaces/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-editissue',
  templateUrl: './editissue.component.html',
  styleUrls: ['./editissue.component.css']
})
export class EditissueComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private issueService: IssueService) { }
  issue: Issue = {
    assignee: '',
    description: '',
    status: ''
  }
  _id: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this._id = params.get('id');
      this.getIssueById(this._id);
    });
  }

  getIssueById(_id: any){
    this.issueService.getIssueById(_id).subscribe((res) => this.issue = res);
  }

  saveIssue(issue: Issue){
    this.issueService.updateIssue(issue).subscribe();
    this.router.navigate(['/home']);
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }
}

