import React from 'react';
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  
constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://media.istockphoto.com/id/496730484/photo/apple-watch-sport-42mm-silver-aluminum-case-with-white-band.jpg?s=612x612&w=0&k=20&c=RY2MGp4S-OVqAZm1ZCUDhM6KSmfAJ02RU51l4mJa2EA=',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-485x485-optimized.jpeg',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }

  handleDecreaseQuantity = (product) => {
    console.log('Heyy please Dec the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if(products[index].qty <= 1) return;

    products[index].qty -= 1;

    this.setState({
      products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id  !== id);
    
    this.setState({
      products: items
    })
  }

  getCartCount  = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }

  getTotalCount = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal += cartTotal + product.price * product.qty;
    })

    return cartTotal;
  }


  render (){
    const { products } = this.state;
    return (
      <div className="App">
       <Navbar count = {this.getCartCount()}/>
       <Cart 
       products = {products}
       onIncreaseQuantity={this.handleIncreaseQuantity}
       onDecreaseQuantity = {this.handleDecreaseQuantity}
       onDeleteProduct={this.handleDeleteProduct}
       />
       <div style={{fontSize: 20, padding: 20}}>
        TOTAL : {this.getTotalCount()}
       </div>
      </div>
    );
  }
  
}

export default App;
 