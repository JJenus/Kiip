import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class CodeSnippetComponent implements OnInit {
  @Input() snippet:any;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  /**
   * getDateTime
   */
  public getDateTime() {
    return this.snippet.createdAt;
  }

}
