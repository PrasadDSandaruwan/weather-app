import React, { useState, useEffect } from "react";

const LoggedIn = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      style={{ width: "25px", height: "25px", backgroundColor: "white" }}
      onClick={handleOpen}
    >
      {open ? (
        <ul className="menu" style={{ width: "100px" }}>
          <li className="menu-item" style={{ width: "100px" }}>
            <button>Log out</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default LoggedIn;
