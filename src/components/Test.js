import React, { Component } from 'react';
import axios from 'axios';
export default class test extends React.Component{

    state={
        persons:[],
        location:[],
        fish: [],
        number:[]
    };
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
                console.log(res);
                this.setState({persons:res.data});
                this.setState({location:res.data});
                this.setState({fish:res.data});
                this.setState({number:res.data});
    });

}
//<ul>{this.state.persons.map(person => <li key={person.id}>{person.name},{person.email},{person.city}</li>)}</ul>
    render() {

        return <table >
        <thead>
        <tr>
        <th>Név</th>
        <th>Helyszín</th>
        <th>Hal típusa</th>
        <th>Hal Súlya(KG)</th>
    </tr>
    </thead>
    <tbody>
    {this.state.persons.map(persons => <tr >

        <td key={persons.id}> {persons.name}</td>
        <td> {persons.address.city}</td>
        <td> {persons.fish.random}</td>
        <td > {persons.weight}</td>


    </tr>)}
    </tbody></table>
    }
    }

