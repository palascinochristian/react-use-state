import languages from "../data/languages";

export default function AccordionList() {
  return (
    <div className="accordions container">
      <div className="accordion">
        <div className="accordion-title">
          <h3>HTML</h3>
          <button className="btn">+</button>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          deleniti rem distinctio dignissimos ad! Sapiente consectetur mollitia
          saepe, impedit obcaecati doloribus! Accusantium, excepturi facilis.
          Alias consectetur voluptatum tempora aliquid placeat?
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-title">
          <h3>HTML</h3>
          <button className="btn">+</button>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          deleniti rem distinctio dignissimos ad! Sapiente consectetur mollitia
          saepe, impedit obcaecati doloribus! Accusantium, excepturi facilis.
          Alias consectetur voluptatum tempora aliquid placeat?
        </div>
      </div>
    </div>
  );
}
