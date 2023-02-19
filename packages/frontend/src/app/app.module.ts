import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementPageComponent } from './features/elements/element-page/element-page.component';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { MonitoringPageComponent } from './features/monitoring/monitoring-page/monitoring-page/monitoring-page.component';
import { ChartModule } from 'primeng/chart';
import { MenubarModule } from 'primeng/menubar';
import { SensorsDialogComponent } from './features/elements/sensors/sensors-dialog/sensors-dialog.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { LoginModule } from 'src/app/features/auth/login/login.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogModule,
    //ToastModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    RatingModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    ChartModule,
    MenubarModule,
    AutoCompleteModule,
    RippleModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    CardModule,
    SkeletonModule,
    LoginModule,
  ],
    declarations: [
        AppComponent,
        ElementPageComponent,
        MonitoringPageComponent,
        SensorsDialogComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
