var assert = require("assert")
var exercise = require("../exercise")

describe("Version-1 Exercises", ()=>{
    describe("#candySalesToObject", ()=>{
        it("maps an array of candy sales to a labeled object", ()=>{
            assert.deepEqual(exercise.candySalesToObject(["Dark Chocolate Crunchies", "4.39", 1]), {
                item: "Dark Chocolate Crunchies",
                price: 4.39,
                quantity: 1
            });
            assert.deepEqual(exercise.candySalesToObject(["a", "3", 2]), {
                item: "a",
                price: 3,
                quantity: 2
            });
        });
    });
    describe("#salesDayToObject", ()=>{
        it("maps an array of sales days to a labeled object", ()=>{
            assert.deepEqual(exercise.salesDayToObject("2015-01-06", {
                "2015-01-06": [
                    ["Dark Chocolate Crunchies", "4.39", 1],
                    ["Mint Wafers", "1.19", 3]
                ]
            }), {
                date: "2015-01-06",
                sales: [{
                    item: "Dark Chocolate Crunchies",
                    price: 4.39,
                    quantity: 1
                },{
                    item: "Mint Wafers",
                    price: 1.19,
                    quantity: 3
                }]
            });
            assert.deepEqual(exercise.salesDayToObject("a", {
                "a": [["a", "2", 2],["b", "1", 1]]
            }), {
                date: "a",
                sales: [{
                    item: "a",
                    price: 2,
                    quantity: 2
                },{
                    item: "b",
                    price: 1,
                    quantity: 1
                }]
            });
        });
    });
    describe("#allSalesToArray", ()=>{
        const allSales = {
          "2015-01-06": [
                ["Dark Chocolate Crunchies", "4.39", 1],
                ["Mint Wafers", "1.19", 3]
          ],
          "2015-01-07": [
                ["Dark Chocolate Crunchies", "4.39", 4]
          ]
        };
        const allSalesArray = [{
            date: "2015-01-06",
            sales: [{
                item: "Dark Chocolate Crunchies",
                price: 4.39,
                quantity: 1
            },{
                item: "Mint Wafers",
                price: 1.19,
                quantity: 3
            }]
        },{
            date: "2015-01-07",
            sales: [{
                item: "Dark Chocolate Crunchies",
                price: 4.39,
                quantity: 4
            }]
        }];
        it("converts a sales object to an array of sales objects", ()=>{
            assert.deepEqual(exercise.allSalesToArray(allSales), allSalesArray);
        });
    });
});
