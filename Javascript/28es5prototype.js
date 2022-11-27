function human(name,city){
    this.name = name;
    this.city = city;
}

function robot(name,country){
    this.name = name;
    this.age = 10;
    this.country = country;
}

var Anand = new human('Anand','Venice')
Anand
human {name: 'Anand', city: 'Venice'}

human.prototype = new robot('Anand','France')
robot {name: 'Anand', age: 10, country: 'France'}

var Anand = new human('Anand','Paris')
Anand
human {name: 'Anand', city: 'Paris'}
Anand.country
'France'
Anand.age
10