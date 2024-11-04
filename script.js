$("a").on("click", function () {
    
    let car = $(this).children().first().html();
    
    if (car == "Lamborghini Temerario" || car == "Porsche 911 Turbo S" || car == "Bugatti Chiron") {

        alert("You are buying a " + car + " for 100,000,000 dollars!");
        alert("Confirm?");

    }
    
})