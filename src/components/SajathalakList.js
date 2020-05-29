import React from 'react'
import shoppingCart from '../store/Sajathalak'
import ShoppingCartActions from "../actions/SajathalakActions";
import axios from "axios";

class SajathalakList extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state = {cart : []};
        this.onChangeOfShoppingCart = this.onChangeOfShoppingCart.bind(this);
    }

    onChangeOfShoppingCart(){
        this.setState({cart : shoppingCart._items})
    }
    componentDidMount() {
        axios.get('http://localhost:3001/catches?name=Teszt Elek').then((res) => {
            const dat = res.data;
            console.log(res.data);
            this.setState({ cart: dat });
        });


    }



    componentWillUnmount() {
        shoppingCart.removeChangeListener(this.onChangeOfShoppingCart);
    }

    

    render() {
        return (
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Név</th>
                    <th>Helyszín</th>
                    <th>Hal típusa</th>
                    <th>Hal súlya (KG)</th>


                </tr>
                </thead>
                <tbody>
                {
                    this.state.cart.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.location}</td>
                                <td>{item.fish}</td>
                                <td>{item.weight}</td>

                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default SajathalakList;
