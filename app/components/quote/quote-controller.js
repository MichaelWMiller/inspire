function QuoteController() {

    var quoteService = new QuoteService()
    var quoteElem = document.getElementById("quote-here")

    this.getQuote = function getQuote() {
        quoteService.getQuote(function(quote) {
            console.log('What is the quote', quote)
            updateQuote(quote)
        })
    }

    function updateQuote(quoteObj) {
        var template = ``
        template += `
		<div class="format-quote">
		<h4><center><bold>${quoteObj.quote}</bold></center></h4>
		<h5><center>-- ${quoteObj.author}</center></h5>
		<button class="button btn btn-info" onclick="app.controllers.quoteController.getQuote()">New</button>
		`
        quoteElem.innerHTML = template
    }

    this.getQuote()
}