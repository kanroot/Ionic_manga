import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-hamburguesa',
  templateUrl: './hamburguesa.component.html',
  styleUrls: ['./hamburguesa.component.scss'],
})
export class HamburguesaComponent implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {}

  abrirMenu() {
    this.menu.open('first');
  }
}
