import {Component} from '@angular/core';
import {TabsPage} from './paginas/tabs/tabs.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage: any = TabsPage;
  constructor() {
  }
}


