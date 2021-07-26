import { Component } from "react";
import { Divider, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';




class Grocery extends Component
{
    AddProduct = () =>
    {

        this.props.AddProduct(this.props.product)

    }

    RemoveProduct = () =>
    {

        this.props.RemoveProduct(this.props.product)
    }

    render()
    {
        return (

            <div>
                <li className="collection-item avatar" key={this.props.product.id}>
                    <div className="item-img">
                        <img style={{ maxWidth: "100px", height: "auto" }} src={this.props.product.picture} alt={this.props.product.picture} />
                    </div>
                    <div className="item-desc">
                        <span className="title">{this.props.product.title}</span>
                        <p>{this.props.product.description}</p>
                        <p><b>Price: {this.props.product.price}$</b></p>
                        <p>
                            <b>Quantity: {this.props.numberOfElement}</b>
                        </p>
                        <div className="add-remove">
                            <i className="material-icons" onClick={this.AddProduct}>arrow_drop_up</i>
                            <i className="material-icons" onClick={this.RemoveProduct}>arrow_drop_down</i>
                        </div>
                        <button className="waves-effect waves-light btn pink remove" onClick={this.RemoveProduct}>Remove</button>
                    </div>
                </li>
            </div>
        )
    }
}
export default Grocery;


