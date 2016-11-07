import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
let $ = require('../node_modules/jquery/dist/jquery.min.js');

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: []
})

export class AppComponent {
  title = 'Speedisha Africa';

  constructor(){
    $(function() {
	    $('.nav a').on('click', function(){ 
	    var selected = $(this);
	        if($('.navbar-toggle').css('display') !='none'){
	            if(!selected.hasClass('dropdown-toggle'))
	            	$(".navbar-toggle").trigger( "click" );
	        }
	    });
	});
    $(document).ready(function() {
        $('ul.nav li.dropdown').hover(function() {
            $('.dropdown-menu', this).fadeIn();
        }, function() {
            $('.dropdown-menu', this).fadeOut('fast');
        }); //hover
    });
  }

}
