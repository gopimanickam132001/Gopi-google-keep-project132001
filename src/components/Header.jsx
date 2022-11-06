import React from 'react';

function Header(props) {
    const logo = (
        <img src= {require("../images/task-list.png")} alt="logo" class="logo" />
      );
      return (
        <div className="header">
          {logo}
          <h1 className="logoName">To-Do</h1>
        </div>
      );
}

export default Header;
