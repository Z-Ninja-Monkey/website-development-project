$("a").on("click", function () {

    let car = $(this).children().first().html();
    alert("You are buying a " + car + " for 100,000,000 dollars!");
    alert("Confirm?");

})