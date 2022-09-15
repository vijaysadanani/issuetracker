import { Component, Input, OnInit } from '@angular/core';
import { Issue } from 'src/app/interfaces/issue';

@Component({
  selector: 'app-editissue',
  templateUrl: './editissue.component.html',
  styleUrls: ['./editissue.component.css']
})
export class EditissueComponent implements OnInit {

  constructor() { }
  @Input() issue!: any;
  ngOnInit(): void {
    console.log(this.issue);
  }

}
