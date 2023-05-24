import {
  Component,
  Output,
  inject,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';

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

  myForm: FormGroup;
  dataService: MyDataService = inject(MyDataService);
  modelRunDates: String[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      modelRunDate1: [''],
      modelRunDate2: [''],
    });

    // Subscribe to valueChanges of mySelect control
    this.myForm.controls['modelRunDate1'].valueChanges.subscribe(() => {
      this.onModelRunDatesSelectionChange();
    });
    this.myForm.controls['modelRunDate2'].valueChanges.subscribe(() => {
      this.onModelRunDatesSelectionChange();
    });
  }

  ngOnInit() {
    this.dataService.loadModelRunDates().then((modelRunDates) => {
      this.modelRunDates = modelRunDates;
      if (modelRunDates.length > 0) {
        this.myForm.controls['modelRunDate1'].setValue(modelRunDates[0]);
      }

      this.onModelRunDatesSelectionChange();
    });
  }

  onModelRunDatesSelectionChange() {
    let selectedModelRunDates: SelectedModelRunDates =
      new SelectedModelRunDates();
    selectedModelRunDates.date1 =
      this.myForm.controls['modelRunDate1'].getRawValue();
    selectedModelRunDates.date2 =
      this.myForm.controls['modelRunDate2'].getRawValue();

    this.selectedModelRunDatesChangedEvent.emit(selectedModelRunDates);
  }
}
