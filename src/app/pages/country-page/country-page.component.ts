import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SelectedModelRunDates } from 'src/app/models/selected-model-run-dates';

// import { ModelRunSelectorsComponent } from '../../shared/model-run-selectors/model-run-selectors.component';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent {
  @Input() countryName: string = '';
  selectedModelRunDates: SelectedModelRunDates = new SelectedModelRunDates();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.countryName = params['countryName'];
    });
  }

  updateSelectedModelRunDates(selectedModelRunDates: SelectedModelRunDates) {
    this.selectedModelRunDates = selectedModelRunDates;
    console.log(this.selectedModelRunDates);
  }
}
