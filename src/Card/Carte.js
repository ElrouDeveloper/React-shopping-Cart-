
import { Component } from "react";
import Grocery from "../Grocery/Grocery";




class Carte extends Component
{

    render()
    {

        const groceries = Object.keys(this.props.groceries).map(key =>
        {
            var totalPrice = this.props.groceries[key].reduce(function (prev, cur)
            {
                return prev + cur.price;
            }, 0);

            return <Grocery price={totalPrice} numberOfElement={this.props.groceries[key].length} product={this.props.groceries[key][0]} />
        });
        return (
            <div>
                {groceries}
            </div>
        );
    }

}
export default Carte;