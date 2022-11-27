// function language(name,country){
//     this.name = name;
//     this.country = country;
//     this.greet = () => {return `Say Hi To ${name}`}
// }


// var Hindi = new language('Hindi','India')

///es6

class language{
    //all declaration
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet = () => {return `Say Hi To ${this.name}`}

}

var French = new language('French','France')
French
language {name: 'French', country: 'France', greet: ƒ}
French.greet()
'Say Hi To French'