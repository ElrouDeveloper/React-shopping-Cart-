import { Component } from "react";
import { Divider, Image, Button } from 'semantic-ui-react'




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
                <Image src={this.props.product.picture} size='tiny' verticalAlign='top' /> <span>{this.props.product.description}</span>
                <Button positive onClick={this.handleAddToCarte}>Add To Carte</Button>
                <div>
                    <span >{this.props.product.price}</span>
                </div>
                <span> number of element : {this.props.numberOfElement} </span>
                <span> total price : {this.props.price} </span>
                <i onClick={this.AddProduct} className="plus square icon"></i>
                <i onClick={this.RemoveProduct} className="minus square icon"></i>

                <Divider />
            </div>
        )
    }


}
export default Grocery;


