/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">List Product</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã Sản Phẩm</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
                {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ProductList;
