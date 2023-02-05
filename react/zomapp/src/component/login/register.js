import React,{Component} from 'react';
import Header from '../Header';

const url = "http://3.17.216.66:5000/api/auth/register"

class Register extends Component {
    constructor(props) {
        super(props)

        this.state={
            name:'Ankit',
            email:'ankit@gmail.com',
            password:'12345678',
            phone:9876543212
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout=()=>{
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }

    render(){
        return(
            <>
                <Header/>
                <div className="container">
                    <hr/>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Register</h3>
                        </div>
                        <div className='panel-body'>
                             <div className='row'>
                                <div className='form-group col-md-6'>
                                    <label for="fname" className='control-label'>FirstName</label>
                                    <input className='form-control' id="fname" name="name" value={this.state.name} onChange={this.handleChange}/>
                                    
                                </div>
                                <div className='form-group col-md-6'>
                                    <label for="email" className='control-label'>Email</label>
                                    <input className='form-control' id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label for="password" className='control-label'>Password</label>
                                    <input className='form-control' id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label for="phone" className='control-label'>Phone</label>
                                    <input className='form-control' id="phone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <button className='btn btn-success' onClick={this.checkout}>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Register