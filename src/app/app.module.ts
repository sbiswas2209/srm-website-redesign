import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcademicsComponent } from './academics/academics.component';
import { ResearchComponent } from './research/research.component';
import { CampusComponent } from './campus/campus.component';
import { HomeComponent } from './home/home.component';
import { AdmissionComponent } from './admission/admission.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    AcademicsComponent,
    ResearchComponent,
    CampusComponent,
    HomeComponent,
    AdmissionComponent,
    HeaderComponent,
    FooterComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
