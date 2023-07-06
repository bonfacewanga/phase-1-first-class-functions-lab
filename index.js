const drivers = ['Antonia','Nuru','Amari','Mo']
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers= function(drivers){
return drivers.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function (dist){
        return fare*dist
    }

}
const calcFare=createFareMultiplier(3)
function fareDoubler (num){
    return num * 2
}
const fareTripple=createFareMultiplier(4)
function fareTripler (num){
    return num * 3
}
const driverArray=['Antonia','Nuru','Amari','Mo'];
const returnDriver=returnFirstTwoDrivers() || returnLastTwoDrivers()
 function selectDifferentDrivers(driverArray, returnDriver) {
   return returnDriver(driverArray);
}
