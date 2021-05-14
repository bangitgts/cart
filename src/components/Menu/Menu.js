/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

class Menu extends Component {
  render() {
    return (
      
        <div className="navbar navbar-default">
          <a className="navbar-brand">Call API</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Trang Chu</a>
            </li>
            <li>
              <a>Danh Sach San Pham</a>
            </li>
          </ul>
        </div>

    );
  }
}
export default Menu;
