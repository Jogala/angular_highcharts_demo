import { Component, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

class States {
  loading = true;
  error = false;
  empty = true;
}

@Component({
  selector: 'app-base-chart',
  styleUrls: ['./base-chart.component.scss'],
  template: `empty as abstract class`,
})
export abstract class BaseChartComponent {
  states: States = new States();

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  abstract ngOnChanges(): void;

  abstract drawChart(data: any): any;

  abstract selectAndTransformData(data: any): any;

  abstract loadData(): any;
}

export async function runGenerateChartPipeline(
  baseChartComponent: BaseChartComponent
): Promise<States> {
  baseChartComponent.states.loading = true;
  try {
    let data = await baseChartComponent.loadData();
    data = baseChartComponent.selectAndTransformData(data);

    if (data.length == 0) {
      baseChartComponent.states.empty = true;
    } else {
      baseChartComponent.drawChart(data);
      baseChartComponent.states.empty = false;
    }

    baseChartComponent.states.error = false;
  } catch (error) {
    baseChartComponent.states.error = true;
    console.error(error);
  }
  baseChartComponent.states.loading = false;

  return baseChartComponent.states;
}
