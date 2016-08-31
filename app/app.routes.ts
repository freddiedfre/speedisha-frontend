import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './home.component';
import { PaypalToMpesaComponent } from './paypal-to-mpesa.component';
import { MpesaToPaypalComponent } from './mpesa-to-paypal.component';
import { ServicesComponent } from './services.component';
import { CommunityForumComponent } from './community-forum.component';
import { SupportComponent } from './support.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { ProfileComponent } from './profile.component';
	
const routes: RouterConfig = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
    { path: 'paypal-to-mpesa', component: PaypalToMpesaComponent },
    { path: 'mpesa-to-paypal', component: MpesaToPaypalComponent },
  { path: 'community-forum', component: CommunityForumComponent },
  { path: 'support', component: SupportComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent }
];

export const appRouterProviders = [
	provideRouter(routes)
];
