import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    public email = '';
    public password = '';
    public error = false;

    constructor(
      private authService: AuthService,
      private router: Router
    ) { }

    public login() {
        this.error = false;
        this.authService.login(this.email, this.password).subscribe(success => {
            this.router.navigate(['elements'])
            this.error = !success;
        });
    }
}
