import { Component } from "react";
import { Divider, Image, Button } from 'semantic-ui-react'




class Grocery extends Component
{

    render()
    {
        console.log( "",this.props.product)

        return (
            <div>
                <Image src={this.props.product.picture} size='tiny' verticalAlign='top' /> <span>{this.props.product.description}</span>
                <Button positive onClick={this.handleAddToCarte}>Add To Carte</Button>
                <div>
                    <span >{this.props.product.price}</span>
                </div>
                <Divider />
            </div>
        )
    }


}
export default Grocery;


