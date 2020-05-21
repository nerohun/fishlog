import React from 'react'
import shoppingCart from '../store/Sajathalak'
import ShoppingCartActions from "../actions/SajathalakActions";

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
        shoppingCart.addChangeListener(this.onChangeOfShoppingCart);
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
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={()=>{
                                            ShoppingCartActions.removeItemById(item.id);
                                        }}
                                    >Törlés</button>
                                </td>
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
