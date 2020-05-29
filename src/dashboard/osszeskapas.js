import React, { Component } from 'react'
import axios from 'axios'

class osszeskapas extends Component {


    constructor(props) {
        super(props)
        this.state = {
            cart: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/catches').then((res) => {
            const dat = res.data;
            console.log(res.data);
            this.setState({ cart: dat });
        });


    }

    render() {
        return <table>
            <thead>
            <tr>
                <th>Név</th>
                <th>Helyszín</th>
                <th>Hal típusa</th>
                <th>Hal Súlya(KG)</th>
            </tr>
            </thead>
            <tbody>
            {this.state.cart.map(persons => <tr key={persons.id}>

                <td > {persons.name}</td>
                <td> {persons.location}</td>
                <td> {persons.fish}</td>
                <td > {persons.weight}</td>


            </tr>)}
            </tbody></table>



    }
}

export default osszeskapas;