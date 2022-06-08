import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramListComponent } from './program-list/program-list.component';

const routes: Routes = [
  // {path: 'programs', component: ProgramListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
