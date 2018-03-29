import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbsModule } from './modules/breadcrumbs/breadcrumbs.module';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
