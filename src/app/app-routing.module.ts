import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunFormulaDataFormComponent } from './run-formula-data-form/run-formula-data-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RunFormulaHistoryFormComponent } from './run-formula-history-form/run-formula-history-form.component';
import { ConfigureFormulaFormComponent } from './configure-formula-form/configure-formula-form.component';
import { LoginDataFormComponent } from './login-data-form-component/login-data-form.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'login',
    component: LoginDataFormComponent
  },
  {
    path: 'new',
    component: RunFormulaDataFormComponent
  },
  {
    path: 'configure',
    component: ConfigureFormulaFormComponent
  },
  {
    path: 'history',
    component: RunFormulaHistoryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
