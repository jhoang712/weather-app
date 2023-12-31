import React, { useState } from "react";
import { getThreeArticles } from "../news";
interface Props {
  buttonTitle: string;
  buttonPosition: { top: string; left: string };
  children: React.ReactNode;
  position: { top: string; left: string };
  onClick?: () => void;
  //id: string;
}

const Dropdown: React.FC<Props> = ({
  buttonTitle,
  buttonPosition,
  children,
  //id,
  onClick,
  position,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log("dropdown button is clicked");
  };

  /*const handleLocationSelect = () => {
    console.log(children);
  }; */

  const dropdownStyle: React.CSSProperties = {
    position: "absolute",
    top: position.top,
    left: position.left,
    display: isOpen ? "block" : "none",
  };

  const buttonStyle: React.CSSProperties = {
    position: "absolute",
    top: buttonPosition?.top || "auto",
    left: buttonPosition?.left || "auto",
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="locationDropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded={isOpen}
        onClick={handleToggle}
        style={buttonStyle}
      >
        {buttonTitle}
      </button>

      {isOpen && (
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
          style={dropdownStyle}
          //onClick={onClick}
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
