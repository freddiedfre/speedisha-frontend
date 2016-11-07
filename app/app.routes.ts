import { provideRouter, RouterConfig }  from '@angular/router';

//import { LoggedInGuard } from 'logged-in.guard';

import { HomeComponent } from './home.component';
import { PaypalServicesComponent } from './paypal-services.component';
import { SkrillServicesComponent } from './skrill-services.component';
import { BitcoinServicesComponent } from './bitcoin-services.component';
import { RatesCalculatorComponent } from './rates-calculator.component';
import { ContactComponent } from './contact.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { MyAccountComponent } from './my-account.component';
import { FaqsComponent } from './faqs.component';
import { HowWeWorkComponent} from './how-we-work.component';
import { AboutUsComponent} from './about-us.component';
import { OurPoliciesComponent} from './our-policies.component';
import { EpaymentApiComponent} from './epayment-api.component';
import { P2PFinanceComponent} from './p2p-finance.component';
	
const routes: RouterConfig = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
  { path: 'paypal-services', component: PaypalServicesComponent },
  { path: 'skrill-services', component: SkrillServicesComponent },
  { path: 'bitcoin-services', component: BitcoinServicesComponent },
  { path: 'rates-calculator', component: RatesCalculatorComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'how-we-work', component: HowWeWorkComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  //{ path: 'my-account', component: MyAccountComponent, canActivate: [LoggedInGuard]},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'our-policies', component: OurPoliciesComponent },
  { path: 'epayment-api', component: EpaymentApiComponent },
  { path: 'p2p-finance', component: P2PFinanceComponent }
];

export const appRouterProviders = [
	provideRouter(routes)
];