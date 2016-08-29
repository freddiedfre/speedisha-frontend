import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: []
})

export class AppComponent {
  title = 'Speedisha Services';
}
