import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { AnimationsComponent } from './animations/animations.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
