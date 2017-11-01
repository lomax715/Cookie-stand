'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm',
                '4pm', '5pm', '6pm', '7pm', '8pm'];

function renderHours(n){
    const hrs = document.getElementById('firstList');
    const td = document.createElement('td');
    td.textContent = hours[n];
    hrs.appendChild(td);
}

function render(n, parent, sph) {
    let tr = document.getElementById(parent);
    let td = document.createElement('td');
    td.textContent = sph[n];
    tr.appendChild(td);
}

function custPerHour(minCustomers, maxCustomers) {
    minCustomers = Math.ceil(minCustomers);
    maxCustomers = Math.floor(maxCustomers);
    return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
}

function salesPerHour(avgSales, custPerHour){
    return Math.floor(avgSales * custPerHour);
}

function Store(minCustomers, maxCustomers, avgSales, custPerHour, salesPerHour, render){
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgSales = avgSales;
    this.custPerHour = custPerHour;
    this.salesPerHour = salesPerHour;
    this.render = render;
}

const pdxAirport = new Store(23, 65, 6, 3, custPerHour, salesPerHour, render);
const pioneerSquare = new Store(3, 24, 1.2, custPerHour, salesPerHour, render);
const powells = new Store(11, 38, 3.7, custPerHour, salesPerHour, render);
const stJohns = new Store(20, 28, 2.3, custPerHour, salesPerHour, render);
const waterfront = new Store(2, 16, 4.6, custPerHour, salesPerHour, render);

function calculateCookies(object, line) {
    let airportArray = [];
    for(let i = 0; i < hours.length; i++){
        let cph = custPerHour(object.minCustomers, object.maxCustomers);
        let sph = object.salesPerHour(oject.avgSales, cph);
        airportArray.push(sph);
        render(i, line, airportArray);
    };
    console.log(airportarray);
};

for(let i = 0; i < 15; i++){
    renderHours(i);
}

calculateCookies(pdxAirport, 'secondList');
calculateCookies(pioneerSquare, 'thirdList');
calculateCookies(powells, 'fourthList')
calculateCookies(stJohns, 'fifthList');
calculateCookies(waterfront, 'sixthList');

// let cphPDX = [custPerHour(pdxAirport.minCustomers, pdxAirport.maxCustomers)];
// let sphPDX = [parseInt((pdxAirport.salesPerHour(pdxAirport.avgSales, cphPDX)))];
// for(let i = 0; i < hours.length; i++){
//     cphPDX.push(custPerHour(pdxAirport.minCustomers, pdxAirport.maxCustomers));
// };
// console.log(cphPDX);

// for(let n = 0; n < hours.length; n++){
//     sphPDX.push(parseInt(salesPerHour(pdxAirport.avgSales, cphPDX[n])));
//     render(n);
// };
// console.log(sphPDX);

// // for(let i= 0; i < hours.length; i++){
// //     totalSalesPerHour.push()
// // }
// // let totalSalesPerHour = [x];
// // let totalSalesPerHour.push(x);
// // console.log(totalSalesPerHour);

// let cphPioneer = [custPerHour(pioneerSquare.minCustomers, pioneerSquare.maxCustomers)];
// let sphPioneer = [parseInt((pioneerSquare.salesPerHour(pioneerSquare.avgSales, cphPioneer)))];
// for(let i = 1; i < hours.length; i++){
//     cphPioneer.push(custPerHour(pioneerSquare.minCustomers, pioneerSquare.maxCustomers));
// };
// console.log(cphPioneer);

// for(let n = 1; n < hours.length; n++){
//     sphPioneer.push(parseInt(salesPerHour(pioneerSquare.avgSales, cphPioneer[n])));
// };
// console.log(sphPioneer);

// let cphPowells = [custPerHour(powells.minCustomers, powells.maxCustomers)];
// let sphPowells = [parseInt((powells.salesPerHour(powells.avgSales, cphPowells)))];
// for(let i = 1; i < hours.length; i++){
//     cphPowells.push(custPerHour(powells.minCustomers, powells.maxCustomers));
// };
// console.log(cphPowells);

// for(let n = 1; n < hours.length; n++){
//     sphPowells.push(parseInt(salesPerHour(powells.avgSales, cphPowells[n])));
// };
// console.log(sphPowells);

// let cphStJohns = [custPerHour(stJohns.minCustomers, stJohns.maxCustomers)];
// let sphStJohns = [parseInt((stJohns.salesPerHour(stJohns.avgSales, cphStJohns)))];
// for(let i = 1; i < hours.length; i++){
//     cphStJohns.push(custPerHour(stJohns.minCustomers, stJohns.maxCustomers));
// };
// console.log(cphStJohns);

// for(let n = 1; n < hours.length; n++){
//     sphStJohns.push(parseInt(salesPerHour(stJohns.avgSales, cphStJohns[n])));
// };
// console.log(sphStJohns);

// let cphWaterfront = [custPerHour(waterfront.minCustomers, waterfront.maxCustomers)];
// let sphWaterfront = [parseInt((waterfront.salesPerHour(waterfront.avgSales, cphWaterfront)))];
// for(let i = 1; i < hours.length; i++){
//     cphWaterfront.push(custPerHour(waterfront.minCustomers, waterfront.maxCustomers));
// };
// console.log(cphWaterfront);

// for(let n = 1; n < hours.length; n++){
//     sphWaterfront.push(parseInt(salesPerHour(waterfront.avgSales, cphWaterfront[n])));
// };
// console.log(sphWaterfront);