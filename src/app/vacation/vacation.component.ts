import { Component, Input, OnChanges }       from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Vacation, Guests } from '../models/data-model';
import { VacationService }           from './vacation.service';

@Component({
  moduleId: module.id,
  selector: 'vacation',
  templateUrl: './vacation.component.html'
})
export class VacationComponent implements OnChanges { 
  @Input() vacation: Vacation;

  vacationForm: FormGroup;
  nameChangeLog: string[] = [];
  constructor(
    private fb: FormBuilder,
    private vacationService: VacationService) {
    this.createForm();
    this.logNameChange();
  }
  createForm() {
    this.vacationForm = this.fb.group({
      name: '',
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }
  ngOnChanges() {
    this.vacationForm.reset({
      name: this.vacation.name
    });
    this.setGuests(this.vacation.guests);
  }
  get secretLairs(): FormArray {
    return this.vacationForm.get('secretLairs') as FormArray;
  };
  setGuests(guests: Guests[]) {
    const guestFGs = guests.map(guest => this.fb.group(guest));
    const guestFormArray = this.fb.array(guestFGs);
    this.vacationForm.setControl('secretLairs', guestFormArray);
  }
  addLair() {
    this.secretLairs.push(this.fb.group(new Guests()));
  }
  onSubmit() {
    this.vacation = this.prepareSaveVacation();
    this.vacationService.updateVacation(this.vacation).subscribe(/* error handling */);
    this.ngOnChanges();
  }
  prepareSaveVacation(): Vacation {
    const formModel = this.vacationForm.value;
    // deep copy of form model lairs
    const secretLairsDeepCopy: Guests[] = formModel.secretLairs.map(
      (guest: Guests) => Object.assign({}, guest)
    );
    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveVacation: Vacation = {
      id: this.vacation.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs // <-- bad!
      guests: secretLairsDeepCopy
    };
    return saveVacation;
  }
  revert() { this.ngOnChanges(); }
  logNameChange() {
    const nameControl = this.vacationForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }
}