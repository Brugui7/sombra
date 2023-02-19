import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { LoginRoutingModule } from 'src/app/features/auth/login/login-routing.module';
import { LoginComponent } from 'src/app/features/auth/login/login.component';
import { RippleModule } from 'primeng/ripple';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        RippleModule,
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
