import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    AboutPageComponent,
    SkillsPageComponent,
    ProjectsPageComponent,
    EducationPageComponent,
    ExperiencePageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
