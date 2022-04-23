import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    menuMode = 'static';
    public tieredItems: MenuItem[] = [
        {
            label: 'Elements',
            icon: 'pi pi-fw pi-table',
            routerLink: 'elements'
        },
        {
            label: 'Monitoring',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: 'monitoring'
        },
        { separator: true },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-sign-out'
        }
    ];

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
    }
}
