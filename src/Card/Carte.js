
import { Component } from "react";
import Grocery from "../Grocery/Grocery";




class Carte extends Component
{

    render()
    {
        console.log("this is your groceries", this.props.groceries)
        const groceries = this.props.groceries.map((product) => (
            <Grocery product={product} />

        ));
        return (
            <div>
                {groceries}

            </div>
        );
    }

}
export default Carte;