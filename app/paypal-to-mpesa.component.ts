import { Component } from '@angular/core';

@Component({
    selector: 'paypal-to-mpesa',
    templateUrl: 'app/views/paypal-to-mpesa.component.html'
})

export class PaypalToMpesaComponent { 
	title = 'To M-pesa';
	mpesa: PaypalToMpesa = {
	    c_id: '',
			c_phone: '',
			dollar_amount: 5,
			c_name: '',
			er: 96.5,
			c_email: '',
		tnc:true
    };

	paypal = 'M-Pesa To Paypal';
}
export class PaypalToMpesa {
  c_id: string;
  c_phone: string;
  dollar_amount: number;
  c_name: string;
  er: number;
  c_email: string;
  tnc: boolean;
}
