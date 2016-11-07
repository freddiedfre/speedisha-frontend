import { Component } from '@angular/core';

@Component({
    selector: 'mpesa-to-paypal',
    templateUrl: 'app/views/mpesa-to-paypal.component.html'
})

export class MpesaToPaypalComponent { 
	title = 'To Paypal';
	paypal: MpesaToPaypal = {
          c_email: '',
     		  c_phone: '',
     	    kes_amount: 5,
     	    c_name: '',
  		    er: 96.5,
   		    mpesa_t_id: '',
		  		tnc:true
        };
}

export class MpesaToPaypal {
  c_email: string;
  c_phone: string;
  kes_amount: number;
  c_name: string;
  er: number;
  mpesa_t_id: string;
  tnc: boolean;
}
