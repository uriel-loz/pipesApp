import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing.module';
import { BasicsComponent } from './pages/basics/basics.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';

@NgModule({
  declarations: [
    BasicsComponent,
    NumbersComponent,
    UncommonComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
})
export class ProductsModule { }
