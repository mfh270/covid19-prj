import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { AboutUsComponent } from '../app/about-us/about-us.component';
import { HelpComponent } from '../app/help/help.component';
import { IndiaTrackerComponent } from '../app/india-tracker/india-tracker.component';
import { InfoComponent } from '../app/info/info.component';
import { LinksComponent } from '../app/links/links.component';
import { PrecautionsComponent } from '../app/precautions/precautions.component';
import { RemediesComponent } from '../app/remedies/remedies.component';
import { SelfTestComponent } from '../app/self-test/self-test.component';
import { SymptomsComponent } from '../app/symptoms/symptoms.component';
import { VideosComponent } from '../app/videos/videos.component';
import { WorldTrackerComponent } from '../app/world-tracker/world-tracker.component';
import { QaComponent } from '../app/qa/qa.component';
import { SuggestionsComponent } from '../app/suggestions/suggestions.component';
const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "aboutus", component: AboutUsComponent },
  { path: "help", component: HelpComponent },
  { path: "india-tracker", component: IndiaTrackerComponent },
  { path: "info", component: InfoComponent },
  { path: "links", component: LinksComponent },
  { path: "precautions", component: PrecautionsComponent },
  { path: "remedies", component: RemediesComponent },
  { path: "self-test", component: SelfTestComponent },
  { path: "symptoms", component: SymptomsComponent },
  { path: "videos", component: VideosComponent },
  { path: "world-tracker", component: WorldTrackerComponent },
  { path: "Q&A", component: QaComponent},
  { path: "suggestions", component: SuggestionsComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
