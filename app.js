'use strict';

const hours = [ '', '6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm',
    '4pm', '5pm', '6pm', '7pm', '8pm'];

Store.prototype.renderHours = function(n) {
    const hrs = document.getElementById('firstList');
    const td = document.createElement('td');
    td.textContent = hours[n];
    hrs.appendChild(td);
};

Store.prototype.render = function(parent, sph) {
    const tr = document.getElementById(parent);
    let td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);

    for(let j = 0; j < hours.length - 1; j++) {
        td = document.createElement('td');
        td.textContent = sph[j];
        tr.appendChild(td);
    }
};

function custPerHour(minCustomers, maxCustomers) {
    minCustomers = Math.ceil(minCustomers);
    maxCustomers = Math.floor(maxCustomers);
    return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
};

function salesPerHour(avgSales, custPerHour){
    return Math.floor(avgSales * custPerHour);
};

function Store(name, minCustomers, maxCustomers, avgSales, custPerHour, salesPerHour) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgSales = avgSales;
    this.custPerHour = custPerHour;
    this.salesPerHour = salesPerHour;
};

const pdxAirport = new Store('Portland Airport', 23, 65, 6, 3, custPerHour, salesPerHour);
const pioneerSquare = new Store('Pioneer Square', 3, 24, 1.2, custPerHour, salesPerHour);
const powells = new Store('Powell\'s', 11, 38, 3.7, custPerHour, salesPerHour);
const stJohns = new Store('St. Johns', 20, 28, 2.3, custPerHour, salesPerHour);
const waterfront = new Store('Waterfront', 2, 16, 4.6, custPerHour, salesPerHour);

function calculateCookies(object, line) {
    const airportArray = [];
    for(let i = 0; i < hours.length; i++){
        const cph = custPerHour(object.minCustomers, object.maxCustomers);
        const sph = object.salesPerHour(object.avgSales, cph);
        airportArray.push(sph);
    };
    object.render(line, airportArray);
    console.log(airportArray);
};

for(let i = 0; i < 16; i++){
    Store.prototype.renderHours(i);
}

calculateCookies(pdxAirport, 'secondList');
calculateCookies(pioneerSquare, 'thirdList');
calculateCookies(powells, 'fourthList');
calculateCookies(stJohns, 'fifthList');
calculateCookies(waterfront, 'sixthList');