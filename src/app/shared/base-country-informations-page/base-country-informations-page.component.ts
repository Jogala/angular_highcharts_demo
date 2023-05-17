import { Component, Input } from '@angular/core';
import { SelectedModelRunDates } from 'src/app/models/selected-model-run-dates';

@Component({
  template: '',
})
export class BaseCountryInformationsPageComponent {
  @Input() selectedModelRunDates!: SelectedModelRunDates;
}
