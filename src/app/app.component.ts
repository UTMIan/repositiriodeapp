import { Component, NgModule } from '@angular/core';
import { MenuComponent } from './home/menu/menu.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}

@NgModule({
  declarations: [
    MenuComponent
  ],

  exports: [
    MenuComponent
  ],

  imports: [
    CommonModule,
    IonicModule
  ]
})

export class ComponentModule { }