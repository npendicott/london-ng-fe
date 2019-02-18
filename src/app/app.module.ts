import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Service
import { EnergyService } from './services/energy/energy.service';
// import { TestService } from './services/test.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SeriesPlotComponent } from './plots/series-plot/series-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
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
