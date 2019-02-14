import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Service
import { EnergyService } from './services/energy.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeriesPlotComponent } from './plots/series-plot/series-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeriesPlotComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EnergyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
