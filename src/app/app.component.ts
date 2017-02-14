import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Vacation Calculator</h1>
    <vacation-list></vacation-list>
  </div>
  `
})
export class AppComponent  {}
