import React, { useState } from "react";
import "./App.css";

const Card = ({ count }) => {
  const [showActive, setShowActive] = useState({
    activeCard: null,
    items: [...Array(count).keys()],
  });

  const handleShowCard = (index) => {
    setShowActive({ ...showActive, activeCard: showActive.items[index] });
  };

  const displayCardValue = (index) => {
    if (showActive.activeCard === showActive.items[index]) {
      return "UP";
    } else return "DOWN";
  };

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            {showActive.items.map((index) => (
              <td
                className={
                  showActive.activeCard === showActive.items[index]
                    ? "data"
                    : "activeData"
                }
                key={index}
                onClick={() => handleShowCard(index)}
              >
                {displayCardValue(index)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Card;
