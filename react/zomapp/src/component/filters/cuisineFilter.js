import React,{Component} from 'react';
import axios from 'axios';

const url = "http://3.17.216.66:4000/filter";

class CuisineFilter extends Component {

    cuisineFilter = (event) => {
        let mealId = this.props.mealId;
        let cuisineId = event.target.value
        let cuisineUrl = "";
        if(cuisineId === ""){
            cuisineUrl = `${url}/${mealId}`
        }else{
            cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(cuisineUrl)
            .then((res) => {this.props.restPerCuisine(res.data)})
    }

    render(){
        return(
            <>
                <center><h3>Cuisine Filter</h3></center>
                <div style={{marginLeft:'15%'}} onChange={this.cuisineFilter}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1"/>North Indain
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2"/>South Indian
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="3"/>Chinese
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="4"/>Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="5"/>Street Food
                    </label>
                </div>
            </>
        )
    }

}


export default CuisineFilter