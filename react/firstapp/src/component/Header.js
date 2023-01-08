import React,{Component} from 'react';

class Header extends Component {

    constructor(){
        super()

        this.state={
            title:'React Main App',
            keyword:'User Text Here'
        }
    }

    handleChange=(event)=>{
        console.log(event.target.value)
        this.setState({keyword:event.target.value})
    }

    render(){
        return(
            <div>
                <center>
                    <h1>{this.state.title}</h1>
                    <input onChange={this.handleChange}/>
                    <div>{this.state.keyword}</div>
                </center>
                <hr/>
            </div>
        )
    }
}


// const Header = ( ) => {
//     return(
//         <div>
//             <center>
//                 <h1>React App</h1>
//             </center>
//             <hr/>
//         </div>
//     )
// }

export default Header;