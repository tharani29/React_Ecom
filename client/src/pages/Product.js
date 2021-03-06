import React from "react";
import Card from "../components/Card";
import Video from '../components/Video';

// Create a Product class
class Product extends React.Component {
    // created a state with product's array
    state = {
      products: []
    };
  // using a componentDidMount here to retrieve my products from my endpoint
  componentDidMount() {
    // fetching the products
    const url = "http://localhost:8000/api/products";
    fetch(url)
    // want to turn into an json object
    .then((response) => {
      return response.json();
    })
    // change the products state and retrieving the data of products
      .then((data) => {
        this.setState({products:data})
      })
    .catch((error) => {
      console.log('BAD', error)
    });
  }

  getProducts = () => {
    const url = "http://localhost:8000/api/products" ;
    fetch(url)
    .then((response) => {
      return response.json();
    })
      .then((data) => {
        this.setState({products:data})
      })
    .catch((error) => {
      console.log('BAD', error)
    });
  }

  // filter function by category
  getSelectedProducts = (e) => {
    const url = "http://localhost:8000/api/productfilter/" + e.target.value;    
    fetch(url)
    .then((response) => {
      return response.json();
    })
      .then((data) => {
        this.setState({products:data})
      })
    .catch((error) => {
      console.log('BAD', error)
    });
  }

  // filter function by prices
  getSelectedPrices = (low, high) => {
    const url = "http://localhost:8000/api/pricefilter/" + low + "/" + high;
    fetch(url)
    .then((response) => {
      return response.json();
    })
      .then((data) => {
        this.setState({products:data})
      })
    .catch((error) => {
      console.log('BAD', error)
    });
  }

  render() {
    return (
      <div className="Product">
        {/* HEADER */}
        <Video />
        {/* Product Page */}
        <section id="products">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Strut Out In Our Proper Watches</h2>
                <hr text-align="left" width="50%" />
                <p className="productTxt">To be a champ you have to look like one</p>
              </div>
            </div>
            {/* Filter */}
            <div id="myBtnContainer">
              <button className="filterBtn" onClick={this.getProducts}>
                Show all
              </button>
              <button className="filterBtn" value="Rubber" onClick={this.getSelectedProducts}>
                Rubber
              </button>
              <button className="filterBtn" value="Wood" onClick={this.getSelectedProducts}>
                Wood
              </button>
              <button className="filterBtn" value="Leather" onClick={this.getSelectedProducts}>
                Leather
              </button>
              <button className="filterBtn" value="Steel" onClick={this.getSelectedProducts}>
                Steel
              </button>
              <button className="filterBtn" value="Gold" onClick={this.getSelectedProducts}>
                Gold
              </button>
            </div>
            <div id="myfilterBtnContainer">
              <button className="filterBtn" onClick={this.getProducts}>
                All Prices
              </button>
              <button className="filterBtn" onClick={() => this.getSelectedPrices(0, 199)}>
                $0-$199
              </button>
              <button className="filterBtn" onClick={() => this.getSelectedPrices(200, 399)}>
                $200-$399
              </button>
              <button className="filterBtn" onClick={() => this.getSelectedPrices(400, 599)}>
                $400-$599
              </button>
              <button className="filterBtn" onClick={() => this.getSelectedPrices(600, 40000)}>
                $600-$40,000
              </button>
            </div>
            {/* Products Layout */}
            {/* mapping through my products here and calling back my Card component, 
                each variable here retrieves specific information from the Card */}
            <div className="flex-items">
              {this.state.products &&
                this.state.products.map(product => (
                  <Card
                    key={product.ProductName}
                    name={product.ProductName}
                    price={product.price}
                    description={product.ProductDescription}
                    image={product.Image}
                    buy={product.buy}
                  />
                ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;
