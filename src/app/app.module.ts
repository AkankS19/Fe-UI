import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from './_guards/auth.guard';

import { RunFormulaDataFormComponent } from './run-formula-data-form/run-formula-data-form.component';
import { RunFormulaHistoryFormComponent } from './run-formula-history-form/run-formula-history-form.component';
import { ConfigureFormulaFormComponent } from './configure-formula-form/configure-formula-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginDataFormComponent } from './login-data-form-component/login-data-form.component';
import { AuthenticationService } from './_services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    RunFormulaDataFormComponent,
    RunFormulaHistoryFormComponent,
    ConfigureFormulaFormComponent,
    WelcomePageComponent,
    LoginDataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
