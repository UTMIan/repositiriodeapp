import { Component, NgModule } from '@angular/core';
import { MenuComponent } from './home/menu/menu.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor (private router: Router) {}
  toSaccountPage() {
    this.router.navigate(['saccount']);
}}

export class ComponentModule { }