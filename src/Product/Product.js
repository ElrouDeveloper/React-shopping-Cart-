import { Component } from "react";





class Product extends Component
{
    handleAddToCarte = () =>
    {

        this.props.onClickAddToCarte(this.props.product);
    }


    render()
    {

        return (
            <div className="card" key={this.props.product.id}>
                <div className="card-image" >
                    <img style={{ maxWidth: "100px", height: "auto" }} src={this.props.product.picture} alt={this.props.product.description} />
                    <span className="card-title">{this.props.product.description}</span>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red">
                        <i onClick={this.handleAddToCarte} className="material-icons">add</i>
                    </span>
                </div>

                <div className="card-content">
                    <p>{this.props.product.description}</p>
                    <p><b>Price: {this.props.product.price}$</b></p>
                </div>
            </div>
        );

    }


}
export default Product;