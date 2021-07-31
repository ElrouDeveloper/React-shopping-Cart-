
import { Component } from "react";
import Grocery from "../Grocery/Grocery";




class Carte extends Component
{

    AddProduct = (e) =>
    {

        this.props.AddProduct(e);
    }

    RemoveProduct = (e) =>
    {
        this.props.RemoveProduct(e);

    }

    render()
    {
        const groceries = Object.keys(this.props.groceries).map(key =>
        {
            var totalPrice = this.props.groceries[key].reduce(function (prev, cur)
            {
                return prev + cur.price;
            }, 0);

            return <Grocery AddProduct={this.AddProduct} RemoveProduct={this.RemoveProduct} price={totalPrice} numberOfElement={this.props.groceries[key].length} product={this.props.groceries[key][0]} />
        });
        return (
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {groceries}
                    </ul>
                </div>
            </div>
        );

    }

}
export default Carte;