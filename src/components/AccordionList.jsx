import languages from "../data/languages";
import Accordion from "./Accordion";

export default function AccordionList() {
  return (
    <div className="accordions container">
      {languages.map((lang) => (
        <Accordion
          key={lang.id}
          title={lang.title}
          description={lang.description}
        />
      ))}
    </div>
  );
}
