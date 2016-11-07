import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LoggedInGuard } from './logged-in.guard';
import { appRouterProviders } from './app.routes';


bootstrap(AppComponent, [
	UserService,
  	LoggedInGuard,
	appRouterProviders,
	HTTP_PROVIDERS
]);
