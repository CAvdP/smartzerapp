import React, { Component } from 'react';

// Creates/changes the content of the product box. //
class ProductBox extends Component {
    render(){
        return(
            <div className="product-box">
                <div className="image-container"><img src={this.props.data.imageRef}></img></div>
                <article>
                    <h2>{this.props.data.title}</h2>
                    <h3>{this.props.data.price}</h3>
                    <h4>{this.props.data.color}</h4>
                    <p>{this.props.data.description}</p>
                    <a href={this.props.data.link} target="_blank">Order now</a>
                </article>
            </div>
        )
    }
}

export default ProductBox;