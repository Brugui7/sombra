import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

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
  ];

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
  }

}
