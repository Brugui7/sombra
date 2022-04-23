import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ElementPageComponent } from './features/elements/element-page/element-page.component';
import { MonitoringPageComponent } from './features/monitoring/monitoring-page/monitoring-page/monitoring-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: 'elements', component: ElementPageComponent},
        {path: 'monitoring', component: MonitoringPageComponent},
        //{path: '**', redirectTo: 'pages/notfound'},
      ],
      {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'},
    ),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
