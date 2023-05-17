import { Component, Input } from '@angular/core';
import { BaseCountryInformationsPageComponent } from './../../../shared/base-country-informations-page/base-country-informations-page.component';
import { SelectedModelRunDates } from 'src/app/models/selected-model-run-dates';

@Component({
  selector: 'app-tab-population',
  templateUrl: './tab-population.component.html',
  styleUrls: ['./tab-population.component.scss'],
})
export class TabPopulationComponent
  implements BaseCountryInformationsPageComponent
{
  @Input() selectedModelRunDates!: SelectedModelRunDates;
}
