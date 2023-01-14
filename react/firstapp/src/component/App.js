import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProdDisplay from './ProductDisplay';
import JSON from './db.json'

class App extends Component {
    constructor(){
        super()

        this.state={
            productData:JSON,
            filteredData:JSON
        }
    }

    filterData=(keyword) => {
        let output = this.state.productData.filter((item) => {
            return (item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1)
        })

        this.setState({filteredData:output})
    }

    render(){
        return(
            <div>
                <Header userInput={(data) => {this.filterData(data)}}/>
                <ProdDisplay prodData={this.state.filteredData}/>
                <Footer year="2023" month="Jan"/>
            </div>
        )
    }
    
}

export default App;