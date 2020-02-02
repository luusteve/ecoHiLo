let data,
    productPosition = 0;
    leftProduct = 0,
    rightProduct = 0,
    playerScore = 0;

$(document).ready(function() {
    let leftImage = $('left_image'),
        leftTitle = $('left_title'),
        leftValue = $('left_value');
    let rightImage = $('right_image'),
        rightTitle = $('right_title'),
        rightValue = $('right_value');

    leftImage.css("background", "linear-gradient( (rgba(135, 137, 139, 0.52)), url('" + data[productTracker].link + "')");
    leftTitle.html(data[productPosition].product);
    leftValue.html(data[productPosition].carbonIntensity);

    rightImage.css("background", "linear-gradient( (rgba(135, 137, 139, 0.52)), url('" + data[productTracker + 1].link + "')");
    rightTitle.html(data[productPosition + 1].product);
    rightValue.html("emits than " + data[productPosition].product);
});

const carbonIntensity = function (sender, answer) {
    currentScore = $('.score');
    if (answer == "higher") {
        if (leftProduct <= rightProduct) {

        }
    }
    else if (answer == "lower") {

    }
    else {
    }
}
/*
const compareEmission = function (sender, answer) {
    if (answer == "higher") {
        if (leftProduct.carbonIntensity >= rightProduct.carbonIntensity) {
            if (leftProduct + 1 == data.length - 1) {
                //TODO END SCREEN
            }
        } else {
            playerScore = playerScore += 100;
            productPosition += 1;
            leftProduct = data[productPosition];
            rightProduct = data[productPosition + 1];
            displayScore = 

        }
    }
}*/

const nextProduct = function () {
    let leftImage = $('left_image'),
        leftTitle = $('left_title'),
        leftValue = $('left_value');
    let rightImage = $('right_image'),
        rightTitle = $('right_title'),
        rightValue = $('right_value');

    leftImage.css("background", "linear-gradient( (rgba(135, 137, 139, 0.52)), url('" + data[productTracker].link + "')");
    leftTitle.html(data[productPosition].product);
    leftValue.html(data[productPosition].carbonIntensity);

    rightImage.css("background", "linear-gradient( (rgba(135, 137, 139, 0.52)), url('" + data[productTracker + 1].link + "')");
    rightTitle.html(data[productPosition + 1].product);
    rightValue.html("emits than " + data[productPosition].product);
}

const requestAPIData = function () {
    let data;
    $.get({
        url: "/api/getdata",
        async: false,
        success: function (d) {
            data = d;
        }
    });

    return data;
};