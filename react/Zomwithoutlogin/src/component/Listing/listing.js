import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';

const url = "http://3.17.216.66:4000/restaurant?mealtype_id="
class Listing extends Component {

    constructor(props){
        super(props)

        this.state={
            restaurantList:''
        }
    }

    setDataPerFilter = (data) => {
        this.setState({restaurantList:data})
    }
     
    render(){
        return(
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center><h2>Filters</h2></center>
                            <hr/>
                            <CuisineFilter  mealId={this.props.match.params.mealId}
                            restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <CostFilter  mealId={this.props.match.params.mealId}
                            restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                        </div>
                        <ListingDisplay listData={this.state.restaurantList}/>
                    </div>
                </div>
            </>
        )
    }

    // apu with axios 
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId', mealId);
        axios.get(`${url}${mealId}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }
}


export default Listing