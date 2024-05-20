import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './pages/basics/basics.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';

const routes: Routes = [
    {
        path: '',
        component: BasicsComponent
    },
    {
        path: 'numbers',
        component: NumbersComponent
    },
    {
        path: 'uncommon',
        component: UncommonComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
