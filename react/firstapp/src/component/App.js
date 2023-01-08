import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    return(
        <div>
            <Header/>
            <h1>Hii From React</h1>
            <h2>React Code</h2>
            <Footer year="2023" month="Jan"/>
        </div>
        
    )
}

export default App;