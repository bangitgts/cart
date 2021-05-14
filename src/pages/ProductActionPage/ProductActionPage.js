/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

class ProductActionPage extends Component {
  constructor(props){
    super(props)
    this.state={
      id:'',
      txtName: '',
      txtPrice: '',
      chkbStatus: '',
    }
  }
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên Sản Phẩm: </label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá: </label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trạng Thái: </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="chkbStatus"
                onChange={this.onChange}
              />
              Còn Hàng
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Lưu Lại
          </button>
        </form>
      </div>
    );
  }
}
export default ProductActionPage;
