(function(){
	
var quoteService=new QuoteService();

	quoteService.getQuote(function (quote) {
		
	

		$('#quote').append(`<h4>
			${quote.quote};
			${quote.author};		
		<h4>`);
		//What can you do with this weather object?
	})

	//Get your QuoteService
	
}())
