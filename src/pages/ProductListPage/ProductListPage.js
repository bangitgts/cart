/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";

class ProductListPage extends Component {
  render() {
    var product = [];
    return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <button type="button" className="btn btn-default">
          Thêm Sản Phẩm
      </button>
      <ProductList>
        {this.showProducts(product)}
      </ProductList>
    </div>
    );
  }
  showProducts(product){
    var result = null;
    if(product.length > 0){
      result = product.map((product,index)=>{
        return(
          <ProductItem
            key={index}
            product={product}
            index={index}
          />
        )
      })
    }
    return null;
  }
}
export default ProductListPage;
