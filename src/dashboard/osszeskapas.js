import React, { Component } from 'react'
import '../App.css';
import Faker from 'faker';

class osszeskapas extends Component {


    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentWillMount() {
        for (let i = 0; i < 25; i++) {
            const user = {
                name: Faker.name.findName(),
                location: Faker.address.city(),
                fish: Faker.random.arrayElement(["Ponty","Keszeg","Tőkehal","Cápa","Csuka"]),
                weight: Faker.random.number(32)

            };
            this.setState(prevState => ({
                users: [...prevState.users, user],
            }))
        }
    }

    renderUsers(user) {
        return (
            <tr>

                <td> {user.name}</td>
                <td> {user.location}</td>
                <td> {user.fish}</td>
                <td> {user.weight}</td>


            </tr>
        )
    }

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
            {this.state.users.map(user => this.renderUsers(user))}
            </tbody></table>
    }
}

export default osszeskapas;