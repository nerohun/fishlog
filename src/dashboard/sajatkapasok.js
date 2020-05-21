import React, {Component} from "react";
import SajathalakList from "../components/SajathalakList";
import SajathalakForm from "../components/SajathalakForm";


class sajatkapasok extends Component{

    render() {
        return (

            <div className="App">
                <div className="row">
                    <div className="col-md-12"><SajathalakForm/></div>
                </div>
                <div className="row">
                    <div className="col-md-9"><SajathalakList/></div>
                </div>
            </div>

        );
    }

        }
    export default sajatkapasok;