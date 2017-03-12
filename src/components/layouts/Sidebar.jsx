import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">
                        Data Table
                    </a>
                </li>
                <li>
                    <Link to="/employees" activeClassName="active">Employees</Link>
                </li>
                <li>
                    <Link to="/departments" activeClassName="active">Departments</Link>
                </li>
            </ul>
        </div>
    );
  }
};

Header.contextTypes = {
     router: React.PropTypes.object.isRequired
};

export default Header;
