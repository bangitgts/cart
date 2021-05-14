/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";
class ProductListPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }
  componentDidMount(){
    // axios({
    //   method: 'GET',
    //   url: 'http://localhost:3000/products',
    //   data: 'null'
    // })
    //   .then(res => {
    //     console.log(res.data)
    //     this.setState({
    //       products : res.data
    //     })
    //   })
    //   .catch(err => {console.log(err)});
    callApi('products','GET',null).then(res => this.setState({
      products: res.data
    }))
  }
  render() {
    let {products}  = this.state;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-default">
          Thêm Sản Phẩm
        </button>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ProductListPage);
