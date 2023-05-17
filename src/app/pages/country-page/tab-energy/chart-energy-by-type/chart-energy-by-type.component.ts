import { Component, Input, inject } from '@angular/core';
import {
  BaseChartComponent,
  runGenerateChartPipeline,
} from '../../../../shared/base-chart/base-chart.component';
import { MyDataService } from '../../../../services/my-data/my-data.service';

@Component({
  selector: 'app-chart-energy-by-type',
  templateUrl: '../../../../shared/base-chart/base-chart.component.html',
  styleUrls: [
    '../../../../shared/base-chart/base-chart.component.scss',
    './chart-energy-by-type.component.scss',
  ],
})
export class ChartEnergyByType extends BaseChartComponent {
  @Input() modelRunDate1: string = '';
  @Input() modelRunDate2: string = '';

  dataService: MyDataService = inject(MyDataService);

  override async ngOnChanges(): Promise<void> {
    this.states = await runGenerateChartPipeline(this);
  }

  override async loadData() {
    let data = [];
    if (this.modelRunDate1 != '') {
      data.push(await this.dataService.loadDataViaPromise(this.modelRunDate1));
    }
    if (this.modelRunDate2 != '') {
      data.push(await this.dataService.loadDataViaPromise(this.modelRunDate2));
    }
    return data;
  }

  override selectAndTransformData(data: any) {
    return data;
  }

  override drawChart(data: any) {
    this.chartOptions = {
      title: {
        text: 'Example Chart',
      },
      series: [],
    };

    console.log(data);
    for (let i = 0; i < data.length; i++) {
      this.chartOptions.series!.push({
        type: 'line',
        data: data[i]['sinus_values'],
      });
    }
  }
}
