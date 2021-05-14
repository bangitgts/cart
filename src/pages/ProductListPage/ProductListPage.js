/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { actFetchProductsRequest } from "../../actions/actions";
class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [1,2,3]
    };
  }
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  render() {
    let { products } = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        {/* <button type="button" className="btn btn-default">
          Thêm Sản Phẩm
        </button> */}
        <Link to="/product/add" className="btn btn-default">
          Thêm Sản Phẩm
        </Link>
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
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
