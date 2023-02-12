import React,{useState,useEffect} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const qurl = "http://3.17.216.66:4000/quicksearch"

const QuickSearch = () => {

    const [title] = useState('Quick Search');
    const [subtitle] = useState('Discover Restaurants By Meal');
    const [mealData,setMeal] = useState('');

    useEffect(() => {
        fetch(`${qurl}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMeal(data)
        })
    },[])


    return(
        <>
                <div id="quickSearch">
                    <span id="quickHeading">{title}</span>
                    <span id="quickSubHeading">{subtitle}</span>
                    <QuickDisplay mealData={mealData}/>
                </div>
        </>
    )
}

export default QuickSearch