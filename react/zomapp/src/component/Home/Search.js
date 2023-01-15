import React,{Component} from 'react';
import './Search.css';

const lurl = "http://3.17.216.66:4000/location"
const rurl = "http://3.17.216.66:4000/restaurant?stateId="

class Search extends Component {
    constructor(){
        super()

        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }


    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    handleCity = (event) =>{
        let stateId = event.target.value;
        fetch(`${rurl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
    }


    render(){
        return(
            <>
                <div id="search">
                    <div id="container">
                        <div id="logo">
                            <span>D!</span>
                        </div>
                        <div id="heading">
                            Find Best Restaurants Near You
                        </div>
                        <div class="dropdown">
                            <select onChange={this.handleCity}>
                                <option>----SELECT YOUR CITY----</option>
                                {this.renderCity(this.state.location)}
                            </select>
                            <select className="restSelect">
                                <option>----SELECT YOUR RESTAURANTS----</option>
                                {this.renderRest(this.state.restaurants)}
                            </select>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    // all api on page load
    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
    
}

export default Search