import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component/home.component';
import { NavbarComponent } from './components/navbar.component/navbar.component';
import { SkillsComponent } from './components/skills.component/skills.component';

const appRoutes: Routes = [
  { path: 'hello', component: HomeComponent, data: { title: 'hello' } },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: 'skills', component: SkillsComponent, data: { title: 'skills' } }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SkillsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only (was true by default)
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
