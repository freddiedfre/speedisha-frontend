import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './home.component';
import { PaypalToMpesaComponent } from './paypal-to-mpesa.component';
import { MpesaToPaypalComponent } from './mpesa-to-paypal.component';

	
const routes: RouterConfig = [
	{
  		path: '',
  		redirectTo: '/home',
  		pathMatch: 'full'
	},
	{
    path: 'home',
  	component: HomeComponent
	},
  /*
  {
    path: 'our-services',
    component: OurServicesComponent
  },
  {
    path: 'community-forum',
    component: CommunityForumComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'sign-up-sign-in',
    component: SignUpSignInComponent
  },
  */
	{
  	path: 'paypal-to-mpesa',
  	component: PaypalToMpesaComponent
	},
	{
		path: 'mpesa-to-paypal',
		component: MpesaToPaypalComponent
	}
];

export const appRouterProviders = [
	provideRouter(routes)
];
