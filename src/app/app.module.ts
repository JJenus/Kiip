import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewSnippetFormComponent } from './main/new-snippet-form/new-snippet-form.component';
import { FormsModule } from '@angular/forms';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions} from 'ngx-highlightjs';
import { CodeSnippetComponent } from './main/code-snippet/code-snippet.component';
import { TagifyModule } from 'ngx-tagify';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    NewSnippetFormComponent,
    CodeSnippetComponent,
    AuthComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HighlightModule,
    TagifyModule.forRoot()
  ],
  providers: [
    HttpClient,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        fullLibraryLoader: () => import('highlight.js'),
        themePath: 'assets/highlight.js/styles/default.css',
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
