import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    console.log(newSnippet);
    this.snippetService.saveSnippet(newSnippet).subscribe(
      (response: Snippet)=>{
        console.log(response);
      }
    );
  }
}
