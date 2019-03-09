import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ToggleButtonComponent } from './components/togglebutton/togglebutton.component';
import { globalEventManager } from './services/globalEventManager.service';
import { InstagramService } from './services/instagram.service';
import { SpotifyService } from './services/spotify.service';
import { TwitterService } from './services/twitter.service';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CardComponent } from './components/card/card.component';

const appRoutes: Routes = [
  //{ path: 'hello', component: HomeComponent, data: { title: 'hello' } },
  { path: '', redirectTo: '/skills', pathMatch: 'full' },
  { path: 'skills', component: SkillsComponent, data: { title: 'skills' } },
  { path: 'portfolio', component: PortfolioComponent, data: { title: 'portfolio' } },
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
    ToggleButtonComponent,
    PortfolioComponent,
    LoaderComponent,
    CardComponent
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
    SpotifyService,
    TwitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
