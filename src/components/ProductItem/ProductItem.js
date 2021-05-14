import { Component } from "react";

class ProductItem extends Component{
    render(){
        return(
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Iphone 5</td>
                <td>500</td>
                <td>
                  <span className="label label-warning">Còn Hàng</span>
                </td>
                <td>
                  <button type="button" className="btn btn-success">
                    Sửa
                  </button>

                  <button type="button" className="btn btn-danger">
                    Xóa
                  </button>
                </td>
              </tr>
        )
    }
    
}
export default ProductItem;