import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APODBrowserComponent } from './src/components/apodbrowser/apodbrowser.component';
import { FirstConnectionComponent } from './src/components/first-connection/first-connection.component';

//Route
const routes: Routes = [
  { path : '', component : FirstConnectionComponent}, //Default path
  { path : 'APODBrowser', component : APODBrowserComponent } //APOD Browser path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
