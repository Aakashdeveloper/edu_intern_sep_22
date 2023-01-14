import React,{Component} from 'react';
import './Header.css';

class Header extends Component {

    constructor(){
        super()

        this.state={
            title:'React Main App',
            keyword:'User Text Here'
        }
    }

    handleChange=(event)=>{
        //console.log(event.target.value)
        this.setState({keyword:event.target.value})
        this.props.userInput(event.target.value)
    }

    render(){
        return(
            <div>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white',fontSize:'20px'}} >{this.state.keyword}</div>
                    </center>
                </header>
            </div>
        )
    }
}

export default Header;