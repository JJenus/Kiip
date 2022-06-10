import { Component, OnInit } from '@angular/core';
import { TagData, TagifySettings } from 'ngx-tagify';
import { BehaviorSubject } from 'rxjs';
import { SnippetService } from 'src/app/snippet.service';
import { Snippet } from '../../snippet';


@Component({
  selector: 'app-new-snippet-form',
  templateUrl: './new-snippet-form.component.html',
  styleUrls: ['./new-snippet-form.component.css']
})
export class NewSnippetFormComponent implements OnInit {
  constructor(private snippetService: SnippetService) { }

  ngOnInit(): void {
  }
  
  public saveSnippet(newSnippet:Snippet){
    let tags = "";
    tags = this.tags.reduce((prv, curr)=>{
      return prv+curr.value+", ";
    }," ").slice(1, tags.length-2);

    newSnippet.tags = tags;

    console.log(newSnippet.tags);
    this.snippetService.saveSnippet(newSnippet).subscribe(
      (response: Snippet)=>{
        console.log(response);
      }
    );
  }
  tags: TagData[] = [];
  // tags = 'foo'; -> if you want to pass as string
    
  settings: TagifySettings = {
    placeholder: 'Start typing...',
    blacklist: ['fuck', 'shit'],
    callbacks: {
      click: (e) => { console.log(e.detail); }
    }
  };
  
  whitelist$ = new BehaviorSubject<string[]>(['hello', 'world']);
  
  readonly = false;
  
  onAdd(tagify: TagData) {
    console.log('added a tag', tagify);  
  }
  
  onRemove(tags: any) {
    console.log('removed a tag', tags);
  }
}
