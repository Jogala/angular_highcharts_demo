https://www.youtube.com/watch?v=CGLdH5ORX-Y&t=3015

# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Highcharts

https://www.highcharts.com/blog/tutorials/highcharts-with-angular-v14/

npm install highcharts --save
npm install highcharts-angular --save

in app.module.ts add:
import { HighchartsChartModule } from "highcharts-angular";
and add HighchartsChartModule in imports.

## Angular Material

A collection of already existing components that we can use in our application.

ng add @angular/material
ng add @angular/cdk

Folder structure angular project:

- src

  - app
    - components / pages
      - component1
      - component2
        ...
    - services
      - service1
      - service2
        ...
    - models
      - model1.ts
      - model2.ts
    - modules
      - feature-module1
      - feature-module2
        ...
    - shared
      - shared.module.ts
    - app.component.ts
    - app.component.html
    - app.component.scss
    - app.component.spec.ts
    - app.module.ts
  - assets
  - environments
  - index.html
  - main.ts
    ...

  ## angular directives

  - component directives <app-my-component></app-my-component>
  - attribute directives <div [ngClass]>Foooo</div>
  - structural directives <div \*ngIf="condition">Foooo</div>

## content projection

https://www.youtube.com/watch?v=c9b7lcjxUHo
