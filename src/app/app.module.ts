import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcademicsComponent } from './academics/academics.component';
import { ResearchComponent } from './research/research.component';
import { CampusComponent } from './campus/campus.component';

@NgModule({
  declarations: [
    AppComponent,
    AcademicsComponent,
    ResearchComponent,
    CampusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
