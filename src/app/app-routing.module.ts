import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Screen1Component } from './components/screen1/screen1.component';
import { Screen2Component } from './components/screen2/screen2.component';
import { Screen3Component } from './components/screen3/screen3.component';
import { Screen4Component } from './components/screen4/screen4.component';
import { Screen5Component } from './components/screen5/screen5.component';
import { AlertComponent } from './errorhandling/alert/alert.component';
import { ErrorComponent } from './errorhandling/error/error.component';
import { NotificationToastersComponent } from './errorhandling/notification-toasters/notification-toasters.component';
import { PageNotFoundComponent } from './errorhandling/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'sr1',component:Screen1Component},
  {path:'',redirectTo:'/sr1', pathMatch:'full'},
  {path:'sr2',component:Screen2Component
  },
  {path:'sr3',component:Screen3Component},
  {path:'sr4',component:Screen4Component},
  {path:'sr5',component:Screen5Component},
  {path:'alert',component:AlertComponent},
  {path:'error',component:ErrorComponent},
  {path:'notification-toasters',component:NotificationToastersComponent},
  {path:'**',component:PageNotFoundComponent}
  // {path:'err',component:ErrorComponent},
  //{path:'**',component:Screen5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
