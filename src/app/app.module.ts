import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { LivresListComponent } from './livres-list/livres-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    LivresListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
