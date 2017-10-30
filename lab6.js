'use strict';

function custPerHour(minCustomers, maxCustomers) {
    minCustomers = Math.ceil(minCustomers);
    maxCustomers = Math.floor(maxCustomers);
    return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
}

function salesPerHour(avgSales, custPerHour){
    return avgSales * custPerHour;
}


const pdxAirport = {
    minCustomers:23,
    maxCustomers: 65,
    avgSales: 6.3,
    custPerHour: custPerHour,
    salesPerHour: salesPerHour
};


let cphPDX = [custPerHour(pdxAirport.minCustomers, pdxAirport.maxCustomers)];
let sphPDX = [parseInt((pdxAirport.salesPerHour(pdxAirport.avgSales, cphPDX)))];
for(let i = 1; i < 14; i++){
    cphPDX.push(custPerHour(pdxAirport.minCustomers, pdxAirport.maxCustomers));
}
console.log(cphPDX);
for(let n = 1; n < 14; n++){
    sphPDX.push(parseInt(salesPerHour(pdxAirport.avgSales, cphPDX[n])));
}
console.log(sphPDX);
// for(let i= 0; i < 14; i++){
//     totalSalesPerHour.push()
// }
// let totalSalesPerHour = [x];
// let totalSalesPerHour.push(x);
// console.log(totalSalesPerHour);

const  pioneerSquare= {
    minCustomers: 3,
    maxCustomers: 24,
    avgSales: 1.2,
    custPerHour: custPerHour,
    salesPerHour: salesPerHour,
};

const powells = {
    minCustomers: 11,
    maxCustomers: 38,
    avgSales: 3.7,
    custPerHour: custPerHour,
    salesPerHour: salesPerHour,
};

const stJohns = {
    minCustomers: 20,
    maxCustomers: 38,
    avgSales: 2.3,
    custPerHour: custPerHour,
    salesPerHour: salesPerHour,
};

const waterfront = {
    minCustomers: 2,
    maxCustomers: 16,
    avgSales: 4.6,
    custPerHour: custPerHour,
    salesPerHour: salesPerHour,
};