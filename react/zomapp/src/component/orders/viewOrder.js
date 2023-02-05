import React,{Component} from 'react';
import axios from 'axios';
import Display from './DisplayOrder';
import Header from '../Header';

const orderApi = "http://localhost:1122/orders";

class ViewOrder extends Component {
    constructor(props) {
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <>
                <Header/>
                <Display orderData={this.state.orders}/>
            </>
        )
    }

    componentDidMount(){
        axios.get(orderApi).then((res) => {this.setState({orders:res.data})} )
    }

}

export default ViewOrder;