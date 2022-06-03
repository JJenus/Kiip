import { Component, Input, OnInit } from '@angular/core';
import { HighlightAutoResult , HighlightJS, HighlightModule} from 'ngx-highlightjs';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class CodeSnippetComponent implements OnInit {
  @Input() snippet:any;
  public language: any[] = ["java", "javascript", "html"]
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
