import {
  Component,
  Output,
  inject,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';

import { MyDataService } from '../../services/my-data/my-data.service';
import { SelectedModelRunDates } from 'src/app/models/selected-model-run-dates';

@Component({
  selector: 'app-model-run-selectors',
  templateUrl: './model-run-selectors.component.html',
  styleUrls: ['./model-run-selectors.component.scss'],
})
export class ModelRunSelectorsComponent {
  @Output()
  selectedModelRunDatesChangedEvent: EventEmitter<SelectedModelRunDates> =
    new EventEmitter<SelectedModelRunDates>();

  @ViewChild('selectModelRunDate1') selectModelRunDate1!: MatSelect;

  selectedModelRunDates: SelectedModelRunDates = new SelectedModelRunDates();

  dataService: MyDataService = inject(MyDataService);
  modelRunDates: string[] = [];

  constructor() {}

  ngOnInit() {
    this.dataService.loadModelRunDates().then((modelRunDates) => {
      this.modelRunDates = modelRunDates;
      if (modelRunDates.length > 0) {
        this.selectedModelRunDates.date1 = modelRunDates[0];
      }

      console.log(typeof this.selectModelRunDate1);
      this.selectModelRunDate1.selectionChange.emit();
    });
  }

  onModelRunDatesSelectionChange(event: MatSelectChange) {
    this.selectedModelRunDatesChangedEvent.emit(this.selectedModelRunDates);
  }
}
