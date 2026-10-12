import React from "react";
import { Link } from "react-scroll";

const SingleNavItems = ({ item }) => {
  const handleClick = (e) => {
    if (item.href === "home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <li className='scrollToLink'>
      <Link
        activeClass='current'
        to={item.href}
        spy={true}
        smooth={true}
        offset={-20} // Adjust according to your layout
        duration={800}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        {item.name}
      </Link>
    </li>
  );
};

export default SingleNavItems;
