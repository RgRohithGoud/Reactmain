import React from 'react'
import NavigationBar from './components/NavigationBar'
import TextBox from './components/TextBox';
import About from './about';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
export default function App(){
    return(
        <>
        <Router>
            <NavigationBar title = "Rg's App" aboutText= "about" />
            <Routes>
                <Route path="/about" element = {<About />}>
                    
                </Route>

                <Route path="/"
                    element = {
                        <div className='EntirePage'>
                            <div className='container'>
                                <TextBox heading = "Enter the text to analyze"/>
                            </div>
                        </div>
                    }
                >
                    
                </Route>
            </Routes>
        </Router>
        </>
    );
}