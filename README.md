## Candy Shop

You are trying to work with an API that returns transaction details on Candy Shop sales. Unfortunately, it returns it in a format that isn't consumable by your app. In the `exercise.js` file, write the functions to transform the response.

## Data Format

### API Response

```js
{
    "2015-01-06": [
        ["Dark Chocolate Crunchies", "4.39", 1],
        ["Mint Wafers", "1.19", 3],
        ["Peppermint Poppers", "2.48", 2],
        ["Peanut Butter Buttered Peanuts", "1.89", 6]
    ],
    "2015-01-07": [
        ["Dark Chocolate Crunchies", "4.39", 4],
        ["Berry Bites", "7.99", 3],
        ["Peppermint Poppers", "2.48", 1],
        ["Caramel Twists", ".60", 7]
    ],
    "2015-01-08": [
        ["Banana Bunches", "4.63", 1],
        ["Peppermint Poppers", "2.48", 3],
        ["Mint Wafers", "1.19", 7],
        ["Dark Chocolate Crunchies", "4.39", 2],
        ["Caramel Twists", ".60", 1]
    ],
    "2015-01-09": [
        ["Caramel Twists", ".60", 3],
        ["Peanut Butter Buttered Peanuts", "1.89", 2]
    ],
    "2015-01-10": [
        ["Peanut Butter Buttered Peanuts", "1.89", 7],
        ["Caramel Twists", ".60", 2],
        ["Berry Bites", "7.99", 3],
        ["Dark Chocolate Crunchies", "4.39", 8],
        ["Mint Wafers", "1.19", 2]
    ]
}
```

### Target Format

```js
[{
    date: "2015-01-06",
    sales: [{
        item: "Dark Chocolate Crunchies",
        price: 4.39,
        quantity: 1
    },{
        item: "Mint Wafers",
        price: 1.19,
        quantity: 3
    },{
        item: "Peppermint Poppers",
        price: 2.48,
        quantity: 2
    },{
        item: "Peanut Butter Buttered Peanuts",
        price: 1.89,
        quantity: 6
    }]
},{
    date: "2015-01-07",
    sales: [{
        item: "Dark Chocolate Crunchies",
        price: 4.39,
        quantity: 4
    },{
        item: Berry Bites,
        price: 7.99,
        quantity: 3
    },{
        item: "Peppermint Poppers",
        price: 2.48,
        quantity: 1
    },{
        item: "Caramel Twists",
        price: .60,
        quantity: 7
    }]
},{
    date: "2015-01-08",
    sales: [{
        item: "Banana Bunches",
        price: 4.63,
        quantity: 1
    },{
        item: "Peppermint Poppers",
        price: 2.48,
        quantity: 3
    },{
        item: "Mint Wafers",
        price: 1.19,
        quantity: 7
    },{
        item: "Dark Chocolate Crunchies",
        price: 4.39,
        quantity: 2
    },{
        item: "Caramel Twists",
        price: .60,
        quantity: 1
    }]
},{
    date: "2015-01-09",
    sales: [{
        item: "Caramel Twists",
        price: .60,
        quantity: 3
    },{
        item: "Peanut Butter Buttered Peanuts",
        price: 1.89,
        quantity: 2
    }]
},{
    date: "2015-01-10",
    sales: [{
        item: "Peanut Butter Buttered Peanuts",
        price: 1.89,
        quantity: 7
    },{
        item: "Caramel Twists",
        price: .60,
        quantity: 2
    },{
        item: "Berry Bites",
        price: 7.99,
        quantity: 3
    },{
        item: "Dark Chocolate Crunchies",
        price: 4.39,
        quantity: 8
    },{
        item: "Mint Wafers",
        price: 1.19,
        quantity: 2
    }]
}]
```

## Setup

1. Run `npm install`
1. Write your code in `exercise.js` as functions that return the result
1. Run `npm test` on the command line to verify your code.

## Instructions

* Write a function called `candySalesToObject` that takes an array of single candy sales and converts it a candy sales object. For example, given the array `["Mint Wafers", "1.19", 2]`, return the object:

```js
{
    item: "Mint Wafers",
    price: 1.19,
    quantity: 2
}
```

Note the data type on the price.

* Write a function called `salesDayToObject` that takes a date (`2015-01-06`) and a day of sales:

```js
{
    "2015-01-06": [
        ["Dark Chocolate Crunchies", "4.39", 1],
        ["Mint Wafers", "1.19", 3]
    ]
}
```

and returns an object formatted like the following:

```js
{
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
}
```

Feel free to reuse your function from the previous example.

* Write a function called `allSalesToArray` that takes the complete, array-formatted response:

```js
{
    "2015-01-06": [
        ["Dark Chocolate Crunchies", "4.39", 1],
        ["Mint Wafers", "1.19", 3],
        ["Peppermint Poppers", "2.48", 2],
        ["Peanut Butter Buttered Peanuts", "1.89", 6]
    ],
    ...
}
```

and returns the complete array of objects:

```js
[{
    date: "2015-01-06",
    sales: [{
        item: "Dark Chocolate Crunchies",
        price: 4.39,
        quantity: 1
    },{
        item: "Mint Wafers",
        price: 1.19,
        quantity: 3
    },{
        item: "Peppermint Poppers",
        price: 2.48,
        quantity: 2
    },{
        item: "Peanut Butter Buttered Peanuts",
        price: 1.89,
        quantity: 6
    }]
},{
...
}]
```

Feel free to reuse your function from the previous example.
