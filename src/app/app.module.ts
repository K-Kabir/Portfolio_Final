import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { EducationComponent } from './Components/education/education.component';
import { FooterComponent } from './Components/footer/footer.component';
import { appIntersectionObserver } from 'src/Directives/IntersectionObserver.directive';
import { AppRoutingModule } from './app-routing.module';
import { SkillsComponent } from './Components/skills/skills.component';
import { WorkComponent } from './Components/work/work.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    EducationComponent,
    FooterComponent,
    appIntersectionObserver,
    SkillsComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
