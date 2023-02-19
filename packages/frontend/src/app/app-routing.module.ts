import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ElementPageComponent } from './features/elements/element-page/element-page.component';
import { MonitoringPageComponent } from './features/monitoring/monitoring-page/monitoring-page/monitoring-page.component';
import { MainLayoutComponent } from 'src/app/features/main-layout/main-layout.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {
          path: '', component: MainLayoutComponent,
          children: [
            {path: 'elements', component: ElementPageComponent},
            {path: 'monitoring', component: MonitoringPageComponent},
          ]
        },

        { path: 'auth', loadChildren: () => import('./features/auth/login/login.module').then(m => m.LoginModule) },
        //{path: '**', redirectTo: 'pages/notfound'},
      ],
      { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' },
    ),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
