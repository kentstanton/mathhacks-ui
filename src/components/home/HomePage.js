import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid" id="main">

                    <div className="col-md-9 col-lg-10 main">

                        <h4 className="display-4 d-none d-sm-block">
                        Welcome back Sam, you have two practice sets in progress
                        </h4>
                        <hr />

                        <div className="row mb-3">
                            <div className="col-xl-3 col-sm-6">
                                <div className="card bg-success text-white h-100">
                                    <div className="card-body bg-success">
                                        <div className="rotate">
                                            <i className="fa fa-list fa-3x"></i>
                                        </div>
                                        <h6 className="text-uppercase">Scientific Notation Level 1: 200 Points</h6>
                                        <h1 className="display-4">134</h1>
                                    </div>
                                </div>
                            </div>
                        

                            <div className="col-xl-3 col-sm-6">
                                <div className="card text-white bg-danger h-100">
                                    <div className="card-body bg-danger">
                                        <div className="rotate">
                                            <i className="fa fa-list fa-3x"></i>
                                        </div>
                                        <h6 className="text-uppercase">Scientific Notation Level 2: 100 Points</h6>
                                        <h1 className="display-4">87</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                

            </div>
        </div>
        );
    }
}

export default HomePage;