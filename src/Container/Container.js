import { Component } from "react";
import Product from "../Product/Product"
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Carte from "../Card/Carte"
import Navbar from "../NavBar/Navbar";
import "./Container.css";
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
            price: 6000,

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


        this.setState({ groceries: this.state.groceries.concat(e) })


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


    AddProduct = (e) =>
    {
        this.setState({ groceries: this.state.groceries.concat(e) })
    }
    RemoveProduct = (e) =>
    {
        let result = this.state.groceries.find(item => item.id === e.id)
        let index = this.state.groceries.indexOf(result)
        this.setState({ groceries: this.state.groceries.splice(index, 1) })
    }


    sumTotal()
    {

        this.props.groceries.reduce(function (prev, cur)
        {
            return prev + cur.price;
        }, 0);
    }



    render()
    {
        const products = this.state.products.map((product) => (

            <Product product={product} onClickAddToCarte={this.onClickAddToCarte} />

        ))

        return (
            <div>
                <div className="container row">
                    <h3 className="center">Our items</h3>
                    <div className="box column ">
                        {products}

                    </div>
                    <div className="total" >Total : {this.state.total}</div>
                    <div className="total">Number Of Items : {this.state.groceries.length} </div>
                    <Carte RemoveProduct={this.RemoveProduct} AddProduct={this.AddProduct} groceries={this.groupedBy(this.state.groceries, 'id')} />
                </div>
            </div>
        );
    }



}
export default Container;
