> map is use to iterate over the array of element
> it always return the same length of output as input array
> it is use to apply the logics(add,sub,mul,div)


var a = [4,5,6,3,23,21,34,36,45,58,7,12,31,88,49]

a.map((data) => {return data*2})
[8, 10, 12, 6, 46, 42, 68, 72, 90, 116, 14, 24, 62, 176, 98]


var a = [4,5,6,3]
a.map((data) => {return `<p>${data*2}</p>`})
['<p>8</p>', '<p>10</p>', '<p>12</p>', '<p>6</p>']

a.map(() => {})

> filter is use to filter out the data
> it may or may not return the same length of output as input array
> filter only return those data for which output/condition is true


var a = [4,5,6,3,23,21,34,36,45,58,7,12,31,88,49]
a.filter((data) => {return data>40})
[45, 58, 88, 49]


var a = [4,5,6,3,23,21,34,36,45,58,7,12,31,88,49]
a.map((data) => {return data>40})
[false, false, false, false, false, false, false, false, true, true, false, false, false, true, true]

var a = [-1,0,1,2,3]
a.map((data) => { return data*2})
 [-2, 0, 2, 4, 6]

a.filter((data) => { return data*2})
[-1, 1, 2, 3]