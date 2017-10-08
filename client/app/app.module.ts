import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatIconModule, MatIconRegistry, MatInputModule, MatListModule, MatSidenavModule,
  MatToolbarModule

} from '@angular/material';
import { AppComponent } from './app.component';
import {ApiService} from "./api.service";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";
import { AccountSelectorComponent } from './account-selector/account-selector.component';
import {RouterModule, Routes} from "@angular/router";
import { MainPageComponent } from './main-page/main-page.component';
import { AccountViewPageComponent } from './account-view-page/account-view-page.component';
import { EmailViewComponent } from './email-view/email-view.component';
import { EmailInfoComponent } from './email-info/email-info.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HtmlSanitizerPipe } from './pipe/html-sanitizer.pipe';
import { AttachmentsComponent } from './attachments/attachments.component';

const appRoutes: Routes = [
  { path: '', component:  LandingPageComponent},
  { path: ':account', component: AccountViewPageComponent},
  { path: ':account/:timestamp', component: AccountViewPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AccountSelectorComponent,
    MainPageComponent,
    AccountViewPageComponent,
    EmailViewComponent,
    EmailInfoComponent,
    LandingPageComponent,
    HtmlSanitizerPipe,
    AttachmentsComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService, MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
