
class restaurantManager{
    //part1(a)
    restaurantList=[
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }
    ]


    //part1(b)
    printAllRestaurantNames=()=>{
        return this.restaurantList.map((data) => {
            return data.restaurantName
        })
    }

    //part1(c)
    filterRestaurantByCity=(cityName)=>{
        return this.restaurantList.filter((data) => {
            return data.city === cityName
        })
    }
}


let restObj = new restaurantManager()
//console.log(restObj.restaurantList)
//console.log(restObj.printAllRestaurantNames())
//console.log(restObj.filterRestaurantByCity('Delhi'))


//////part2-a/////
var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

let out = 0;
for(key in orderData){
    //out = out+Number(orderData[key])
    out += Number(orderData[key])
}

//console.log(out)

/**
 * 20/199 * 100
 * 10.050251256281408
 * 29/199 * 100
 * 14.572864321608039
 */


function getPercentage(orderData){
    let total = 0;
    for(key in orderData){
        total += Number(orderData[key])
    }

    let output = [];
    let count = 0;
    for(key in orderData){
        let percentValue = ((orderData[key]/total)*100).toFixed(2);
        count = count+1
        let myObj = {};
        myObj.id = count;
        myObj.order = key;
        myObj.percent = percentValue+" %";
        myObj.restaurant="Punjabi Tadka";
        output.push(myObj)
    }
    return output
}

console.log(getPercentage(orderData))

/*
[
  {
    id: 1,
    order: 'Below 500',
    percent: '10.05 %',
    restaurant: 'Punjabi Tadka'
  },
  {
    id: 2,
    order: '500-1000',
    percent: '14.57 %',
    restaurant: 'Punjabi Tadka'
  },
  {
    id: 3,
    order: '1000-1500',
    percent: '15.08 %',
    restaurant: 'Punjabi Tadka'
  },
  {
    id: 4,
    order: '1500-2000',
    percent: '22.11 %',
    restaurant: 'Punjabi Tadka'
  },
  {
    id: 5,
    order: 'Above 2000',
    percent: '38.19 %',
    restaurant: 'Punjabi Tadka'
  }
]*/