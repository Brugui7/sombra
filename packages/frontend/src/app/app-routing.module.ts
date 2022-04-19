import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ElementPageComponent } from './features/elements/element-page/element-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: 'elements', component: ElementPageComponent},
        //{path: '**', redirectTo: 'pages/notfound'},
      ],
      {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'},
    ),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
