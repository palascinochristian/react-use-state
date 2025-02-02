export default function Accordion({ title, description, id }) {
  return (
    <div key={id} className="accordion">
      <div className="accordion-title">
        <h3>{title}</h3>
        <button className="btn">+</button>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}
