import { Component, Input } from '@angular/core';
import { BaseCountryInformationsPageComponent } from './../../../shared/base-country-informations-page/base-country-informations-page.component';
import { SelectedModelRunDates } from 'src/app/models/selected-model-run-dates';

@Component({
  selector: 'app-tab-energy',
  templateUrl: './tab-energy.component.html',
  styleUrls: ['./tab-energy.component.scss'],
})
export class TabEnergyComponent
  implements BaseCountryInformationsPageComponent
{
  @Input() selectedModelRunDates!: SelectedModelRunDates;
}
