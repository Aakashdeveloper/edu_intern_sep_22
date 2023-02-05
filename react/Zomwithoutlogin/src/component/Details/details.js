import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './details.css';
import MenuDisplay from './menuList';

const rurl = "http://3.17.216.66:4000/details";
const murl = "http://3.17.216.66:4000/menu";

class Details extends Component{
    constructor(props){
        super(props)

        this.state={
            details:'',
            menuList:'',
            mealId:sessionStorage.getItem('mealId'),
            userItem:''
        }
    }

    addToCart=(data)=>{
        this.setState({userItem:data})
    }

    proceed = () => {
        sessionStorage.setItem('menu',JSON.stringify(this.state.userItem))
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render(){
        // let details = this.state.details;
        let {details} = this.state;
        return(
            <>
                <div id="mainContent">
                    <div className="imgDiv">
                        <img src={details.restaurant_thumb} alt={details.restaurant_name}/>
                    </div>
                    <div className="contentDiv">
                        <h2>{details.restaurant_name}</h2>
                        <span>231 Customers Say {details.rating_text} </span>
                        <h3><del>Old Price: Rs.1000</del></h3>
                        <h3>New Price: Rs.{details.cost}</h3>
                        <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                        <div class="feature_container">
                            <figure>
                                <img src="https://i.ibb.co/wJvrhYg/veg.png" class="featureIcon"/>
                                <figcaption>Pure Veg</figcaption>
                            </figure>
                            <figure>
                                <img src="https://i.ibb.co/mD3jpgc/sentizied.png" class="featureIcon"/>
                                <figcaption>Fully Senatized</figcaption>
                            </figure>
                        </div>
                        <Tabs>
                            <TabList>
                                <Tab>About Us</Tab>
                                <Tab>Contact Us</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>{details.restaurant_name}</h2>
                                <p>{details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h2>{details.address}</h2>
                                <h3>Phone: {details.contact_number}</h3>
                            </TabPanel>
                        </Tabs>
                        <div>
                            <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">Back</Link> &nbsp;
                            <button  className="btn btn-success" onClick={this.proceed}>Procceed</button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="col-md-12">
                    <MenuDisplay menuData={this.state.menuList}
                    finalOrder={(data) => {this.addToCart(data)}}/>
                </div>
            </>
        )
    }

    //api with async await
    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1]
        let response = await axios.get(`${rurl}/${restId}`)
        let menuData = await axios.get(`${murl}/${restId}`)
        this.setState({details:response.data[0],menuList:menuData.data})
    }
}

export default Details;