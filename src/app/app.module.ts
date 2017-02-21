import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
//import { FormsModule }          from '@angular/forms';
//import { AppRoutingModule }          from './app-routing.module';

import { AppComponent }  from './app.component';
import { VacationComponent }   from './vacation/vacation.component';
import { VacationListComponent }   from './vacation/vacation-list.component';
import { BreakdownComponent }     from './breakdown/breakdown.component';
import { PageNotFoundComponent }     from './not-found.component';
import { FacebookLoginComponent }     from './facebook/facebook.component';

import { VacationService }         from './vacation/vacation.service'; //  <-- #1 import service

@NgModule({
  imports:      [ 
  BrowserModule, ReactiveFormsModule
  //, AppRoutingModule
  ],
  declarations: [ 
  AppComponent, VacationComponent, VacationListComponent, BreakdownComponent, PageNotFoundComponent, FacebookLoginComponent 
  ],
  exports: [ // export for the DemoModule
    AppComponent, VacationComponent, VacationListComponent, BreakdownComponent, FacebookLoginComponent
  ],
  providers: [ 
  VacationService 
  ], // <-- #4 provide HeroService  

  bootstrap:    [ 
  AppComponent 
  ]
})
export class AppModule { }
