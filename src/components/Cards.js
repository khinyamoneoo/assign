import React, { useState } from 'react';
import Card from './Card';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Navbar() {

};

function Cards(props) {
    const [open, setOpen] = useState(true);

    const handleClick = () => setOpen(open => !open);
    return (
        <div className="id">
            {
                open ?
                    <div class="container">
                        <nav className="navbar" style={{ float: 'right' }}>
                            <div className="navbar-container ">
                                <div className="menu-icon" style={{ cursor: 'pointer' }} onClick={handleClick}>
                                    {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
                            x
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
                    : <></>
            }
        </div>
    )
}

export default Cards;