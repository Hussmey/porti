import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ServicesComponent } from './components/services/services.component';
import { CounterSectionComponent } from './components/counter-section/counter-section.component';
import { WorkComponent } from './components/work/work.component';
import { TminsialSectionComponent } from './components/tminsial-section/tminsial-section.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { UpToUpComponent } from './components/up-to-up/up-to-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    AboutMeComponent,
    ServicesComponent,
    CounterSectionComponent,
    WorkComponent,
    TminsialSectionComponent,
    BlogComponent,
    ContactComponent,
    UpToUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [NgForm],
  bootstrap: [AppComponent]
})
export class AppModule { }
