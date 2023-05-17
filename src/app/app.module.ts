import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { TabPopulationComponent } from './pages/country-page/tab-population/tab-population.component';
import { TabEnergyComponent } from './pages/country-page/tab-energy/tab-energy.component';
import { ChartDemographicsComponent } from './pages/country-page/tab-population/chart-demographics/chart-demographics.component';
import { MatSelectModule } from '@angular/material/select';
import { WrapperShowComponent } from './shared/wrapper-show/wrapper-show.component';
import { ModelRunSelectorsComponent } from './shared/model-run-selectors/model-run-selectors.component';
import { ChartEnergyByType } from './pages/country-page/tab-energy/chart-energy-by-type/chart-energy-by-type.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    CountryPageComponent,
    HomeComponent,
    TabPopulationComponent,
    TabEnergyComponent,
    ChartDemographicsComponent,
    WrapperShowComponent,
    ModelRunSelectorsComponent,
    ChartEnergyByType,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HighchartsChartModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
