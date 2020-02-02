let data,
    productPosition = 0,
    leftProduct = 0,
    rightProduct = 0,
    playerScore = 0;

$(document).ready(function () {
    playGame();
});

const playGame = function () {
    data = requestAPIData();
    leftProduct = data[productPosition];
    rightProduct = data[productPosition + 1];

    if (data) {
        let leftImage = $('.left_image'),
            leftTitle = $('.left_title'),
            leftValue = $('.left_value'),
            rightImage = $('.right_image'),
            rightTitle = $('.right_title'),
            rightValue = $('.right_value'),
            currentScore = $('.score');


        leftImage.css("background", "linear-gradient(to top, rgba(58, 60, 61, 0.52), rgba(2, 2, 2, 0.815)), url('" + data[productPosition].link + "')");
        leftTitle.html(data[productPosition].product);
        leftValue.html(data[productPosition].carbonIntensity + " CO2/kg");

        rightImage.css("background", "linear-gradient(to top, rgba(58, 60, 61, 0.52), rgba(2, 2, 2, 0.815)), url('" + data[productPosition + 1].link + "')");
        rightTitle.html(data[productPosition + 1].product);
        rightValue.html("emits than " + data[productPosition].product + " CO2/kg");

    }
}
const compareData = function (sender, answer) {
    if (answer == "lower") {
        if (leftProduct.carbonIntensity >= rightProduct.carbonIntensity) {
            if (productPosition + 1 == data.lenght - 1) {
                //TODO END
               // break;
            } else {
                playerScore += 100;
                productPosition += 1;
                leftProduct = data[productPosition];
                rightProduct = data[productPosition + 1];
                currentScore = $('.score').html("Score: " + playerScore);
                nextProduct();
            }
        }
        else {
            //TODO END;
            //break;
        }
    }
    else if (answer == "higher") {
        if (leftProduct.carbonIntensity <= rightProduct.carbonIntensity) {
            if (productPosition + 1 == data.lenght - 1) {
                //TODO END
               // break;
            }
        } else {
            playerScore += 100;
            productPosition += 1;
            leftProduct = data[productPosition];
            rightProduct = data[productPosition + 1];
            currentScore = $('.score').html("Score: " + playerScore);
            nextProduct();
        }
    }
    else {
        //TODO END
        //break;
    }
};



const nextProduct = function () {
    let leftImage = $('.left_image'),
        leftTitle = $('.left_title'),
        leftValue = $('.left_value');
    let rightImage = $('.right_image'),
        rightTitle = $('.right_title'),
        rightValue = $('.right_value');

        leftImage.css("background", "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('" + data[productPosition].link + "')");
    leftTitle.html(data[productPosition].product);
    leftValue.html(data[productPosition].carbonIntensity);

    rightImage.css("background", "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('" + data[productPosition+1].link + "')");
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