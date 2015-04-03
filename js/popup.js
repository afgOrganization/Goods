// Pop Up JS Loads content via Ajax

	$('.signUpNow').on('click', function(event){

		event.preventDefault();

		$('.overlay').hide();
		
		$.ajax('popUpContent/registration.html', {
			success: function (response) {
				$('.popBox').html(response).fadeIn();
				$('.overlay').fadeIn();
				return response;
				
			},
			error : function(request, errorType, errorMessage){
				alert('There was a problem loading the content. Please try again later.'); 
				//+ errorType + ' Message: ' + errorMessage
				return;

			},
			timeout : 20000 ,
		});
		
		console.log('ajax btn clicked');
	});





	//Thank You Pop Up (Pops  Up After Registering) 
	$('.thankYou').on('click', function(event){

		event.preventDefault();

		$('.overlay').hide();
		
		$.ajax('popUpContent/thankyou.html', {
			success: function (response) {
				$('.popBox').html(response).fadeIn();
				$('.overlay').fadeIn();
				return response;

			},
			error : function(request, errorType, errorMessage){
				alert('There was a problem loading the content. Please try again later.'); 
				//+ errorType + ' Message: ' + errorMessage
				return;

			},
			timeout : 20000 ,
		});
		
		console.log('ajax btn clicked');
	});






	//Update Info Popup 
	$('.updateInfo').on('click', function(event){

		event.preventDefault();

		$('.overlay').hide();
		
		$.ajax('popUpContent/updateInfo.html', {
			success: function (response) {
				$('.popBox').html(response).fadeIn();
				$('.overlay').fadeIn();
				return response;
				

			},
			error : function(request, errorType, errorMessage){
				alert('There was a problem loading the content. Please try again later.'); 
				//+ errorType + ' Message: ' + errorMessage
				return;

			},
			timeout : 20000 ,
		});
		
		console.log('ajax btn clicked');
	});





	//Thank You Pop Up (Pops  Up After Registering) 
        $('.completeProfile').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/completeProfile.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });





        //Uploaded Receipt Popup 
		$('.uploadedReceipt').on('click', function(event){

			event.preventDefault();

			$('.overlay').hide();
		
			$.ajax('popUpContent/upload.html', {
				success: function (response) {
					$('.popBox').html(response).fadeIn();
					$('.overlay').fadeIn();
					return response;
				},
				error : function(request, errorType, errorMessage){
					alert('There was a problem loading the content. Please try again later.'); 
					//+ errorType + ' Message: ' + errorMessage
					return;

				},
				timeout : 20000 ,
			});
		
		console.log('ajax btn clicked');
		});




		//Enter Address Popup 
		$('.enterAddress').on('click', function(event){

			event.preventDefault();

			$('.overlay').hide();
		
			$.ajax('popUpContent/address.html', {
				success: function (response) {
					$('.popBox').html(response).fadeIn();
					$('.overlay').fadeIn();
					return response;
				},
				error : function(request, errorType, errorMessage){
					alert('There was a problem loading the content. Please try again later.'); 
					//+ errorType + ' Message: ' + errorMessage
					return;

				},
				timeout : 20000 ,
			});
		
		console.log('ajax btn clicked');
		});

       


/*------------- More Info Popups (Redeem Page)--------------*/


        //$2 Coupon Event Handler
        $('.coupon').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/couponInfo.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });




         //Can Coolie Popup Event Handler
        $('.canCoolie').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/canCoolie.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });

        $('.fbFan').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/fbFan.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });




        //Package Popup Event Handler
        $('.package').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/package.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });

        $('.fbFan').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/fbFan.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });




        //Package Popup Event Handler
        $('.package').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/package.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });


		// Die Cast Car Popup
        $('.car').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/car.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });



        // Race Tickets
        $('.raceTix').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/raceTix.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                
            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });

	//Even Column Heights 
	//check and update height on resize
    $(window).on('resize', heightCheck); 

    function heightCheck() {

    var col = $('.col');

      if ($('.spacer').is(':visible')) {

            var height = $('.getHeight').height();
            col.css('height', height);

      } else {

            col.css('height', 'auto');

      } 
      console.log('heightCheck()');
         
    }

    //close button code can be found at the bottom of the external page
	
