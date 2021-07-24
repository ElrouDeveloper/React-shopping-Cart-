import { Component } from "react";
import { Divider, Image, Button } from 'semantic-ui-react'




class Grocery extends Component
{

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

                <Divider />
            </div>
        )
    }


}
export default Grocery;


