import React,{Component} from 'react';
import './Header.css';
import {Link,withRouter} from 'react-router-dom';

const url = "http://3.17.216.66:5000/api/auth/userinfo "
class Header extends Component {

    constructor(){
        super()

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk');
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionlHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            sessionStorage.setItem('userInfo',JSON.stringify(data))
            return(
                    <div id="social">
                        <Link to="/" id="login" className="btn btn-success" style={{color:'black'}}>
                            <span className='glyphicon glyphicon-user'></span> Hi {data.name}
                        </Link> &nbsp;
                        <button onClick={this.handleLogout} className="btn btn-danger" style={{color:'black'}}>
                            <span className='glyphicon glyphicon-log-out'></span> Logout
                        </button>
                    </div>
            )
        }else{
            return(
                <div id="social">
                        <Link to="/login" id="login" className="btn btn-success" style={{color:'black'}}>
                            <span className='glyphicon glyphicon-log-in'></span> Login
                        </Link> &nbsp;
                        <Link to="/register" id="register" className="btn btn-info" style={{color:'black'}}>
                            <span className='glyphicon glyphicon-user'></span> Register
                        </Link>
                </div>
            )
        }
    }

    render(){
        return(
            <>
                <header>
                    <div id="icon">
                        <h1>Devomato</h1>
                        <Link className="btn btn-info" to="/">Home</Link>
                    </div>
                    {this.conditionlHeader()}
                    
                </header>
            </>
        )
    }

    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}

export default withRouter(Header)