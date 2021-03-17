import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ResultComponent} from './result/result.component';
import {StartComponent} from './start/start.component';

const routes: Routes = [
  {
    path: 'result',
    component: ResultComponent,
  },
  {
    path: '',
    component: StartComponent,
  },
];

// export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
