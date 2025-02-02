import { useState } from "react";

export default function Accordion({ title, description, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div key={id} className="accordion">
      <div className={`accordion-title ${isOpen ? "" : "closed"}`}>
        <h3>{title}</h3>
        <button className="btn" onClick={toggle}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <div className="description">{description}</div>}
    </div>
  );
}
