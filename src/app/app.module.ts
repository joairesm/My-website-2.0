import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component/home.component';
import { NavbarComponent } from './components/navbar.component/navbar.component';
import { SkillsComponent } from './components/skills.component/skills.component';
import { ContactComponent } from './components/contact.component/contact.component';
import { ToggleButtonComponent } from './components/togglebutton.component/togglebutton.component';
import { globalEventManager } from './services/globalEventManager.service';
import { InstagramService } from './services/instagram.service';
import { SpotifyService } from './services/spotify.service';

const appRoutes: Routes = [
  { path: 'hello', component: HomeComponent, data: { title: 'hello' } },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: 'skills', component: SkillsComponent, data: { title: 'skills' } },
  { path: 'contact', component: ContactComponent, data: { title: 'contact' } },
  { path: '**', redirectTo: '/hello', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SkillsComponent,
    ContactComponent,
    ToggleButtonComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only (was true by default)
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    globalEventManager,
    InstagramService,
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
