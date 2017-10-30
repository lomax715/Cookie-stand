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
};
console.log(cphPDX);
for(let n = 1; n < 14; n++){
    sphPDX.push(parseInt(salesPerHour(pdxAirport.avgSales, cphPDX[n])));
};
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

let cphPioneer = [custPerHour(pioneerSquare.minCustomers, pioneerSquare.maxCustomers)];
let sphPioneer = [parseInt((pioneerSquare.salesPerHour(pioneerSquare.avgSales, cphPioneer)))];
for(let i = 1; i < 14; i++){
    cphPioneer.push(custPerHour(pioneerSquare.minCustomers, pioneerSquare.maxCustomers));
};
console.log(cphPioneer);
for(let n = 1; n < 14; n++){
    sphPioneer.push(parseInt(salesPerHour(pioneerSquare.avgSales, cphPioneer[n])));
};
console.log(sphPioneer);
const powells = {
    minCustomers: 11,
    maxCustomers: 38,
    avgSales: 3.7,
    custPerHour: custPerHour,
    salesPerHour: salesPerHour,
};

let cphPowells = [custPerHour(powells.minCustomers, powells.maxCustomers)];
let sphPowells = [parseInt((powells.salesPerHour(powells.avgSales, cphPowells)))];
for(let i = 1; i < 14; i++){
    cphPowells.push(custPerHour(powells.minCustomers, powells.maxCustomers));
};
console.log(cphPowells);
for(let n = 1; n < 14; n++){
    sphPowells.push(parseInt(salesPerHour(powells.avgSales, cphPowells[n])));
};
console.log(sphPowells);
const stJohns = {
    minCustomers: 20,
    maxCustomers: 38,
    avgSales: 2.3,
    custPerHour: custPerHour,
    salesPerHour: salesPerHour,
};

let cphStJohns = [custPerHour(stJohns.minCustomers, stJohns.maxCustomers)];
let sphStJohns = [parseInt((stJohns.salesPerHour(stJohns.avgSales, cphStJohns)))];
for(let i = 1; i < 14; i++){
    cphStJohns.push(custPerHour(stJohns.minCustomers, stJohns.maxCustomers));
};
console.log(cphStJohns);
for(let n = 1; n < 14; n++){
    sphStJohns.push(parseInt(salesPerHour(stJohns.avgSales, cphStJohns[n])));
};
console.log(sphStJohns);
const waterfront = {
    minCustomers: 2,
    maxCustomers: 16,
    avgSales: 4.6,
    custPerHour: custPerHour,
    salesPerHour: salesPerHour,
};

let cphWaterfront = [custPerHour(waterfront.minCustomers, waterfront.maxCustomers)];
let sphWaterfront = [parseInt((waterfront.salesPerHour(waterfront.avgSales, cphWaterfront)))];
for(let i = 1; i < 14; i++){
    cphWaterfront.push(custPerHour(waterfront.minCustomers, waterfront.maxCustomers));
};
console.log(cphWaterfront);
for(let n = 1; n < 14; n++){
    sphWaterfront.push(parseInt(salesPerHour(waterfront.avgSales, cphWaterfront[n])));
};
console.log(sphWaterfront);