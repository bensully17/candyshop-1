module.exports = {
    // Uncomment these functions as you write them
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};
const candyArray = []
function candySalesToObject(array) {
    let candyObject = array.reduce((acc, sale, index) => {
        if (index === 0) {
            acc.item = sale;
        }
        if (index === 1) {
            acc.price = sale;
        }
        if (index === 2) {
            acc.quantity = sale;
        }
        return acc
    }, {})
    return candyObject
}

function salesDayToObject(date, daysSales){
    let allSales = daysSales[date]
    let newObject = allSales.reduce((acc, salesArray) => {
    acc.date = date
    acc.sales.push(candySalesToObject(salesArray))
    return acc
   }, {sales: []})
   return newObject
}

function allSalesToArray(object) {
return Object.keys(object).map(date => salesDayToObject(date, object))
}

