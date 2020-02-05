import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { MovidetailsComponent } from './movidetails/movidetails.component';
import { MovisliderComponent } from './movislider/movislider.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TvComponent } from './tv/tv.component';

import { HttpClientModule } from '@angular/common/http';
import { WatchsPipe } from './watchs.pipe';

import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { GenderPipe } from './gender.pipe';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    MovidetailsComponent,
    MovisliderComponent,
    ContactsComponent,
    MoviesComponent,
    PeopleComponent,
    ReviewsComponent,
    TvComponent,
    WatchsPipe,
    GenderPipe,
    SeemorePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
