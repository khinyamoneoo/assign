import React,{ useState } from 'react';
import Card from './Card';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Navbar() {
    const [click,setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    };

class Cards extends React.Component{
    render(){
        return(
            <div className="id">
                <div class="container">
                <nav className="navbar">
                    <div className="navbar-container  onClick={handleClick}">
                    <div className="menu-icon">
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                   </div>   
                   </div>
                </nav>
                <h2>Welcome to Workbench</h2>
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-4">
                                <Card title="Video 1" description="Description for video 1" />
                            </div>
                            <div className="col-md-4">
                                <Card title="Video 2" description="Description for video 2" />
                            </div>
                            <div className="col-md-4">
                                <Card title="Video 3" description="Description for video 3" />
                            </div>
                        </div>
                    </div>
            {/* <Link>I can handle it myself.</Link> */}
                 </div>
            </div>
        )
    }
}

export default Cards;