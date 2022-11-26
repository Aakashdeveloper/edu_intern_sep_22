let calc={
    sum:function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}

calc.sum(9,8)
17
calc.sub(9,8)
1

/////////
function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi To ${name}`}
}


var Hindi = new language('Hindi','India')
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
'Say Hi To Hindi'

var French = new language('French','France')
French
language {name: 'French', country: 'France', greet: ƒ}
French.greet()
'Say Hi To French'