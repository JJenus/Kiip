import { Component, OnInit, Input, Output } from '@angular/core';
import { Snippet } from '../snippet';
import { SnippetService } from '../snippet.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit { 

  public snippets?: Snippet[];
  constructor(private snippetService?: SnippetService) { }

  ngOnInit(): void {
    this.getSnippets()
  }
  public getSnippets(): void{
    this.snippetService?.getSnippets().subscribe(
      (response: Snippet[])=>{
        console.log(response);
        this.snippets = response;
      }
    )
  }

  public addNewSnippet(snippet: Snippet){
    this.snippets?.push(snippet);
  }
  
  public code = `
  hljs.configure({
    noHighlightRe: /^do-not-highlightme$/i,
    languageDetectRe: /\bgrammar-([\w-]+)\b/i, // for 'grammar-swift' style CSS naming
    classPrefix: ''     // don't append class prefix
                        // … other options aren't changed
  })
  `;
}
