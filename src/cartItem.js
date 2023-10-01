import React from 'react';

class CartItem extends React.Component {
  render () {
    console.log('this.props', this.props);
    const { price, title, qty } = this.props.product;
    const {
        product, 
        onIncreaseQuantity, 
        onDecreaseQuantity,
        onDeleteProduct
    } = this.props;
    return (
      <div className="cart-item">
        {this.props.jsx}
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
                        <img 
                            alt ="increase" 
                            className="action-icons" 
                            src="data:image/png;base64,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" 
                            onClick={() => onIncreaseQuantity(product)}
                            />
                        <img 
                            alt ="decrease" 
                            className="action-icons" 
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAYFBMVEX///8AAABLS0vz8/PV1dWkpKTIyMi8vLzExMTn5+fZ2dl4eHhdXV1xcXGFhYX29vZGRkbf398iIiJlZWWVlZUVFRU3NzcuLi5/f3+Pj4+1tbVra2tRUVE8PDyurq7t7e231sYVAAADoElEQVRoge1b6ZLiIBCOm/s+jI5xdHz/t1yjNWsjEBro2FVb+X4DH6FPmk4QbNiwYcMGK4R5H0VZek6zKOrz8KPUUVxW3bB7YbhWZRx9ZBPFWO10qKZoXfKk0XL/oknWIs/jwcj+EEacr8Den3Dsjx2cemL2W4kmf6K+EbK3ZrHLaFoq+h8H9hk/JOz53pF+t9sTKGKKVzsZQ+pLr9W7yxjPrreYnXA8XnTDSi/2/Kpa89iksqtt00Y5+Oohg+hLXq8bC51it/3YyRO+nH1ycpAWq5Jlq2oTOTocHD1yIq1UF4hpRS3Nc9qARF9hnWovWazDBt7pj5nN5KPvBqI32Td2yUX45rEPlkqYi5p/ONtNv+MsfsCXnRmKpnx0seFclMHVZq7o9b4d2Gd8C6tYeMLUdeIbxM9Ax4JcCDknZ/ogOMGFBqwUBfP1CyDCCexxc4R0w1X2vxB0AJWQtILme9IHgWAFmJQMeo6DfwKTQz/QmMff4H7t3Y6MM1zQnBWXdttFAB6oUZt7KHyaC2UIVcAUQ6HFUt3kMrCmwZtA14M0VwRATmRwQrHFUeEBhRovjgSfX5PRBwFIyYalcTDpweR6WBRIrQKmUhHSCxqwZNQrKP8T8GD1o8AxdWS35wdacDHRC3Z8DRpJ6ZFLAylRF1DA0Wo1K3yNudIe/10AwAnr3HqEU1I3ANPS3QWA8/OuG0gAOa3OBYLQS19KBcLVBWGgfuT00LdoFDB82ehlBf5XiaZTny6IvdTWP2P6t7omBoMoqdOQrP5jQq27pwPtVjsXYH4a9ddX3iE04gUGoDZAwK/+BrmwooY6cwBZmJrfNCCSmTRQRhgQAtWfZzogfBFa6T2N4gUXBeUH4EvwSgcDIpD6WsP9/dzy59Z/bvtH+b+Lwf1d3P0f8P+TZg0fGP0/d/zjjv/s+Q93/sed/3Ln/1ABKW/fMzD3H/b7H/f9l/v+z17/4K7/cNe/2Ot/sP5JpwH4+qdQ/7V58VyCRf2Xvf7NXf9nf/8AeRr9+w8mr+R+/+J+/3t7//Rzgy7vn+zvv9zv3+zv/2v0P3R2k8n7Pyz7EZn7Xzz7fzLv/h+v/iepTkHTgPXZ/i/2/jf2/r+F/kfZmkJN/2Pn1wis7/+cQP/ntFL/Z8De/8re/xtw9z/f0U5mMgkT5Q3euv+9pOx/n8Hb/z+D9/+HBxKzIqz3/8cTi/+/jNRlMyXCQvn/T/HZn5D4/n/asGHDhv8BfwHbXS6mgzgdkQAAAABJRU5ErkJggg=="
                            onClick={() => onDecreaseQuantity(product)}
                            />
                        <img 
                            alt ="delete" 
                            className="action-icons" 
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAZlBMVEX///8AAAApKSnm5ub7+/sPDw/s7Oz09PQ7Ozv4+PhHR0ckJCTV1dXw8PDg4OAcHBzKysozMzN5eXlycnKWlpatra3Dw8O5ubmlpaWJiYlZWVmenp5eXl5CQkJRUVEuLi5oaGiBgYHnkf4kAAADFElEQVR4nO2caXOjMAyGCXcTAoQjQBJo+P9/creWc0GxZSpnprt6PxrVecaHZHukOo6RPvJqcDcKuUOV+2Z9GsmvY9XP3xQ31giiEwbgS1dLA+EpZ2AyEHsbBNEBT7DZ9DbG4Xrv3lXobjTSE6Sy60OTeAol9ac09MgRSui401sWYFlQE0QGwwu0wQcxQi663YUYWzlnCTFCK3otccYwDNQOqhO9VhaM0YI11uKMK+zK/W0I47sR/DB5VQq+sUtQgiEr00lziHbafl7GbjCRdHnT5u+1YOzGRY4iSAZMGFqrE8JbVDYBvnTWERS2CbROvrZPoHGb3sMOt/BM9OhaFWlkRA5aK+eu/Vk/FV4mLHpUPFwjDw5/7vJxpgHI1BbB3x0Pv7DsHqRXs0fgOHAPWA6iW/G9tokAW+6y+L3X7xkahGHx+xtGodWMwqj5TqBesxbkjjjaI2h0O8LbCYMMF1JX6AgEB4XjGW/uKw8tKL/FQNV5KtSGGBJFqpFq3kGgmefOPoH2fnHW9/EzIdxOerEJcMXd+dNRWAcxoQCgQwdh2Bhbb0+1HffS4+APInB+2xI+EESAgH95YQRG+BUI/ux+/k2LVYT6cpn41/OspT1NWygRRPx4uRmLe/jL24uIczMGMgTxwtw/RftIvPb2T4ahuC/1thB80fx8G9uLluzpBiqfPafrgREYgREYgREYgREYgREYgREYgREYgREYgREYgREYgREYgREYgREYgREYgRFWIzjxtDkSLcOs5TT9SzIEkX7WzFpekhPrWQspgpMX5SRB7VhMs/2P5ThPYvu3sjj+P4SdMjPSTLB7jRE2hLn5gLDD9wibm7ICDfJuB4OplfVBdAiQeGtSXAgFMweymQhhNSLLroTkYiCrghtXLC5ZuESUky0zsM0y3WUyckayInNZJmOY6A5FAmbTt6BbTvEsfGqU3gp8sipX1vOqleTdvSO8X5J6ygsPVFXNaj0qldbUGxDnZK8q/CCtJFtZ/ZKgy/x1uqzeWX6D+mcHOvXNjwrwk7b8DPS/sqTgUNa6EfgDdSJNf8JX2soAAAAASUVORK5CYII=" 
                            onClick={() => onDeleteProduct(product.id)}
                            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;