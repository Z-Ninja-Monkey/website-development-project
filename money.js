let currentMoney;

function updateMoney() {

    currentMoney = Number($("#money").html().substring(1));

    if (currentMoney >= 391483) {
        currentMoney -= 391483;
    } else {
        currentMoney = 0;
    }

    $("#money").html("$" + currentMoney.toString());

}

setInterval(updateMoney, 10);

