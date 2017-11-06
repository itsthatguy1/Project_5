/**
 *   @author Sean Stock (sstock6829@gmail.com)
 *   @version 0.0.1
 *   @summary Project 5 || created: 10.30.17
 */

"use strict";
const PROMPT = require('readline-sync');

let numPassengers, zonesCrossed;
let ticketPrices = [];

/**
 * @method
 * @desc The main dispatch method
 */
function main(){
    promptNumPassengers();
    promptZonesCrossed();
    setTicketPrice();
}

main();



/**
 * @method
 * @desc Allows user to enter the number of passengers in their group
 * @returns numPassengers
 */
function promptNumPassengers(){
    const MIN_PASSENGERS = 1, MAX_PASSENGERS = 4;
    numPassengers = PROMPT.question(`\nHow many passengers are in your group? `);
    while (numPassengers < MIN_PASSENGERS || numPassengers > MAX_PASSENGERS){
        console.log(`I'm sorry, "${numPassengers}" is an incorrect value. Please try again.`);
        numPassengers = PROMPT.question(`\nHow many passengers are in your group? `);
    }
}

/**
 * @method
 * @desc Allows the user to enter the number of zones they will cross
 * @returns zonesCrossed
 */
function promptZonesCrossed(){
    const MIN_ZONES = 1, MAX_ZONES = 4;
    zonesCrossed = PROMPT.question(`\nHow many zones will you or your group travel across? `);
    while (zonesCrossed < MIN_ZONES || zonesCrossed > MAX_ZONES){
        console.log(`I'm sorry, "${zonesCrossed}" is an incorrect value. Please try again.`);
        zonesCrossed = PROMPT.question(`\nHow many zones will you or your group travel across? `);
    }
}

/**
 * @method
 * @desc Sets the ticket price for the user
 * @param numPassengers
 * @param numZonesCrossed
 */
function setTicketPrice(){
    for (let i = 0; i <= 3; i++){
        ticketPrices[i] = [];
        if (i === 0){
            ticketPrices[i][0] = 7.50;
            ticketPrices[i][1] = 10.00;
            ticketPrices[i][2] = 12.00;
            ticketPrices[i][3] = 12.75;
        }
        if (i === 1){
            ticketPrices[i][0] = 14.00;
            ticketPrices[i][1] = 18.50;
            ticketPrices[i][2] = 22.00;
            ticketPrices[i][3] = 23.00;
        }
        if (i === 2){
            ticketPrices[i][0] = 20.00;
            ticketPrices[i][1] = 21.00;
            ticketPrices[i][2] = 32.00;
            ticketPrices[i][3] = 33.00;
        }
        if (i === 3){
            ticketPrices[i][0] = 25.00;
            ticketPrices[i][1] = 27.50;
            ticketPrices[i][2] = 36.00;
            ticketPrices[i][3] = 37.00;
        }
    }
    let actualPassengers = numPassengers - 1;
    let actualZonesCrossed = zonesCrossed - 1;
    let ticketPrice = ticketPrices[actualPassengers][actualZonesCrossed];
    displayTicketPrice(ticketPrice);

}

/**
 * @method
 * @desc Displays the user's ticket price
 * @param ticketPrice
 */
function displayTicketPrice(ticketPrice){
    process.stdout.write('\x1Bc');
    console.log(`\nYour ticket price is $${ticketPrice}`);
}
