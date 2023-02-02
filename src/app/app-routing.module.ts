import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component : HomePageComponent},
  {path:"about", component : AboutPageComponent},
  {path:"skills", component : SkillsPageComponent},
  {path:"projects", component : ProjectsPageComponent},
  {path:"education", component : EducationPageComponent},
  {path:"about", component : ExperiencePageComponent},
  {path:"about", component : ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
