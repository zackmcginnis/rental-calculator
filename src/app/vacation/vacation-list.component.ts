import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { Vacation }        from '../models/data-model';
import { VacationService } from '../vacation/vacation.service';

@Component({
  moduleId: module.id,
  selector: 'vacation-list',
  templateUrl: 'vacation-list.component.html'
})
export class VacationListComponent implements OnInit {
  vacations: Observable<Vacation[]>;
  isLoading = false;
  selectedVacation: Vacation;
  constructor(private vacationService: VacationService) { }
  ngOnInit() { this.getVacations(); }
  getVacations() {
    this.isLoading = true;
    this.vacations = this.vacationService.getVacations()
                      // Todo: error handling
                      .finally(() => this.isLoading = false);
    this.selectedVacation = undefined;
  }
  select(vacation: Vacation) { this.selectedVacation = vacation; }
}


