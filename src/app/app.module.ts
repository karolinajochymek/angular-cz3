import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ItemModule } from './modules/item/item.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './modules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LifeCycleHooksModule } from './modules/life-cycle-hooks/life-cycle-hooks.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }]),
    ItemModule,
    SharedModule,
    FormsModule,
    LifeCycleHooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
