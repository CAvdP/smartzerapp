import React, { Component } from 'react';
import classNames from 'classnames';
import ProductBox from './ProductBox';
import data from '../data.json';

// data.json will mimic incoming data from the server in this Demo //

class Overlay extends Component {
    // setup variables //
    constructor(props) {
        super(props)
        this.state = {
            productData: data[0],
            sidebarActive: false,
            productBoxActive: false
        }
    }
    // Loops through the data.json and creates thumbnails for each item in data + creates button that passes data to the product box //
    createThumbnails = () => {
        return data.map((data, idx) => (
            <li className="product-thumbnail-item" key={idx}>
                <button
                className="container-child" 
                onClick={()=> this.setState({productData: data, productBoxActive: true})}
                style={{backgroundImage:"url(" + data.thumbnailRef + ")"}}>
                </button>
            </li>
        ))
    }

    render(){
        // Since the overlay has 3 (positions) depending on the state of sidebarActive and productBoxActive it will bind a classname dynamically //
        var overlayClassNames = classNames({
            'sidebar--active': this.state.sidebarActive && !this.state.productBoxActive,
            'both--active': this.state.sidebarActive && this.state.productBoxActive
          });

        return(
            <div className={'overlay ' + overlayClassNames}>
                <ProductBox data={this.state.productData}/>
                <div className="side-bar">
                    <ul className="product-thumbnail-list container-child">
                    {this.createThumbnails()}
                    </ul>
                </div>
                {
                //button that toggles the sidebar or closes the whole overlay if the porduct box is active as well//
                }
                <div className="toggle-container">
                    <button className="container-child" onClick={()=> this.setState({sidebarActive: !this.state.sidebarActive, productBoxActive: false})}>></button>
                </div>
            </div>
        )
    }
}

export default Overlay;
