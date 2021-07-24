import { Component } from "react";
import Product from "../Product/Product"
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Carte from "../Card/Carte"


class Container extends Component
{


    state = {
        numberOfItems: 0,
        total: 0,
        groceries: [],
        products: [{
            id: uuidv4(),
            description: "Shampo1",
            picture: "Product/product1.jpg",
            price: 6000

        }, {
            id: uuidv4(),
            description: "Shampo2",
            picture: "Product/product2.jpg",
            price: 2200

        }, {
            id: uuidv4(),
            description: "Shampo3",
            picture: "Product/product3.jpg",
            price: 1200

        }, {
            id: uuidv4(),
            description: "Shampo4",
            picture: "Product/product4.jpg",
            price: 4000

        }, {
            id: uuidv4(),
            description: "Shampo5",
            picture: "Product/product5.jpg",
            price: 2500

        },
        ]
    }


    onClickAddToCarte = (e) =>
    {
        this.setState({ total: this.state.total + e.price })

        this.setState({ numberOfItems: this.state.numberOfItems + 1 })

        console.log("item", e)

        this.setState({ groceries: this.state.groceries.concat(e) })

        console.log(this.state.groceries)
        const groupedBy = this.groupedBy(this.state.groceries, 'id')
        console.log("grouped by ", groupedBy)
        console.log("first elemet", Object.entries(groupedBy)[0])




        // Object.keys(this.state.groceries).map(key =>
        //    console.log("key", this.state.groceries[key])//value
        // )
    }

    groupedBy = (array, key) =>
    {
        return array.reduce((result, currentValue) =>
        {
            (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
            );
            return result;
        }, {});
    };




    render()
    {
        const products = this.state.products.map((product) => (

            <Product product={product} onClickAddToCarte={this.onClickAddToCarte} />

        ))

        return (
            <div>
                {products}
                <span >total : {this.state.total}</span>
                <span>numberOfItems : {this.state.numberOfItems} </span>
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li><Link to="/Pay">Pay</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route
                            path='/pay'
                            render={(props) => (
                                <Carte {...props} groceries={this.groupedBy(this.state.groceries, 'id')} />
                            )}
                        />
                    </Switch>
                </BrowserRouter>
            </div>

        );
    }



}
export default Container;
