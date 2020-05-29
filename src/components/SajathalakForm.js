import React from 'react'
import SajathalakActions from "../actions/SajathalakActions";
import "../App.css"

class SajathalakForm extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state={
            name : '',
            location:"",
            fish : '',
            weight : 0
        };
    }

    render() {
        return (
            <table className="table">
                <tbody>
                <tr>
                    <td>Név</td>
                    <td><input
                        type="text"
                        value={this.state.name}
                        onChange={(e)=>{
                            this.setState({name : e.target.value});
                        }}
                    /></td>
                </tr>
                <tr>
                    <td>Helyszín</td>
                    <td><input
                        type="text"
                        value={this.state.location}
                        onChange={(e)=>{
                            this.setState({location : e.target.value});
                        }}
                    /></td>
                </tr>
                <tr>
                    <td>Hal Típusa</td>
                    <td><input
                        type="text"
                        value={this.state.fish}
                        onChange={(e)=>{
                            this.setState({fish : e.target.value});
                        }}
                    /></td>
                </tr>
                <tr>
                    <td>Hal Súlya (KG)</td>
                    <td><input
                        type="number"
                        value={this.state.weight}
                        onChange={(e)=>{
                            this.setState({weight : e.target.value});
                        }}
                    /></td>
                </tr>
                <tr>
                    <td colSpan="2"><button
                        className="btn btn-info"
                        onClick={()=>{SajathalakActions.insertItem(this.state)}}
                    >Hozzáadás</button></td>

                </tr>
                </tbody>
            </table>
        );
    }
}

export default SajathalakForm;
