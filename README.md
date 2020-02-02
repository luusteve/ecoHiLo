# ecoHiLo

## To play the game
Use this link: https://eco-high-low.herokuapp.com/

## The game
You are given 2 elements:
* One element with its given carbon emission per kg
* Another without that information

![alt text](https://github.com/luusteve/ecoHiLo/blob/master/preview.png "Preview")

You, the player, must guess if the other element has a higher or lower carbon emssion per kg than the first element.

* If you succeed, the second element becomes  the element on the left and a new element is presented to you on the right. This will continue  until you fail.

* If you fail, you will immediately lose with your score on screen.

This game is inspired by the famous Higher or Lower game. We implemented our own version of the game but with an emphasis on sustainability. The point of the game is to raise awareness on the environmental damages of everyday items or everyday food items.

## Packages Used:
* express
* ejs
* express-ejs-layouts
* nodemon


<!-- Important npm packages to install: `npm install i express ejs express-ejs-layouts`

and 

`npm i --save-dev nodemon`
If that doesn't work, 
`sudo npm install -g --force nodemon`

`git push https://git.heroku.com/eco-high-low.git master` -->
