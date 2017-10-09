# Pinterest

This project was created to display a basic infinite scrolling capability.

It uses a custom scroller component to track user's scroll position on the page.

Upon reaching the end of the page, it emits an event alerting the parent component.

The method binded to the event will then execute, in the case of this app, the `loadPins()` method

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

## Installing dependencies
 In the root directory, run `npm install` to install all projects dependencies prior to starting the server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

This unit has no written tests. If needed you may add tests per component by creating a `spec.ts` file for each component.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
End-To-End tests can by written in the `e2e-spec` file found in the `e2e` directory.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
