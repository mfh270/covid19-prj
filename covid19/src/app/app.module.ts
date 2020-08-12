import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

// Components
import { AboutUsComponent } from './about-us/about-us.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { InfoComponent } from './info/info.component';
import { HelpComponent } from './help/help.component';
import { LinksComponent } from './links/links.component';
import { VideosComponent } from './videos/videos.component';
import { RemediesComponent } from './remedies/remedies.component';
import { SelfTestComponent } from './self-test/self-test.component';
import { WorldTrackerComponent } from './world-tracker/world-tracker.component';
import { IndiaTrackerComponent } from './india-tracker/india-tracker.component';
import { QaComponent } from './qa/qa.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutUsComponent,
    SymptomsComponent,
    PrecautionsComponent,
    InfoComponent,
    HelpComponent,
    LinksComponent,
    VideosComponent,
    RemediesComponent,
    SelfTestComponent,
    WorldTrackerComponent,
    IndiaTrackerComponent,
    QaComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    OverlayModule,
    MatTooltipModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
