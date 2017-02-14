import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { VacationComponent }   from './vacation/vacation.component';
import { BreakdownComponent }     from './breakdown/breakdown.component';
import { PageNotFoundComponent }     from './not-found.component';

const appRoutes: Routes = [
  { path: 'vacation', component: VacationComponent },
  {
    path: 'breakdown',
    component: BreakdownComponent,
//    data: { price: priceModel,
//    		guests: guestsModel
//    	}
  },
  { path: '',
    redirectTo: '/vacation',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

