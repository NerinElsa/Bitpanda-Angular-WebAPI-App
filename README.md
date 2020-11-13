# JuniorAngularTestapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

About the App

This is an Angular App project which retrieves data from BitPanda API endpoint and displays results in HTML tables. First of all, the received data from API is used to select only desired data, such as "Cryptocoins", "Indexes", "Commodities" and "Fiats" to produce sub-responses. The attributes of these data are then caught inside seperate classes. Those attributes are then displayed on HTML table using string interpolation and structural directives. 

Bootstrap is used to style the HTML table and other elements on UI. The menubar is impleneted via RouterModule. Also all pages except 'All Assets' have a simple 'Search' option provided. On the 'Cryptocoins' page, a simple 'Sort' option is implemented to sort revelant data from dropdown list in ascending and descending order.


## Development server

To run this project locally in development server follow these steps:

* Download the project into desired location and folder (use cli command or simply download the zip folder) in local machine.
* Open cmd or any terminal window, and then navigate to the project folder.
* Run `npm install` to install all requires dependancies for the project.
* In case, the above command gives an error , try 
        `npm install` followed by
        `ng update`   followed by 
        `npm update`
* Once all errors are cleared and everything is updated. run
        `ng serve --open` this compiles the project and opens it in a new browser window.
* The url is `http://localhost:4200/`. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
