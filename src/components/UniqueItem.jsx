// componenta simpla pentru afisarea unui uniqueItem care are doar un singur props
import React from "react";
import "../components/UniqueItem.scss";

function UniqueItem(props) {
  const { text } = props;
  return (
    <div className="unique-item">
      <nav>
        <ul>
          <li>
            <p>{text}</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default UniqueItem;
