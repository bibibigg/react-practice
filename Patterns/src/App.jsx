import Accordion from "./components/Accordion/Accordion";
import AccordionContent from "./components/Accordion/AccordionContent";
import AccordionTitle from "./components/Accordion/AccordionTitle";
import SearchableList from "./components/SearchableList/SearchableList";
import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./Place";

function App() {
  const PLACES = [
    {
      id: "african-savanna",
      image: savannaImg,
      title: "African Savanna",
      description: "Experience the beauty of nature.",
    },
    {
      id: "amazon-river",
      image: amazonImg,
      title: "Amazon River",
      description: "Get to know the largest river in the world.",
    },
    {
      id: "caribbean-beach",
      image: caribbeanImg,
      title: "Caribbean Beach",
      description: "Enjoy the sun and the beach.",
    },
    {
      id: "desert-dunes",
      image: desertImg,
      title: "Desert Dunes",
      description: "Discover the desert life.",
    },
    {
      id: "forest-waterfall",
      image: forestImg,
      title: "Forest Waterfall",
      description: "Listen to the sound of the water.",
    },
  ];

  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion classname="accordion">
          <Accordion.Item id="experience" classname="accordion-item">
            <AccordionTitle className="accordion-item-title">
              We got 20 years of experience
            </AccordionTitle>
            <AccordionContent className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of planning highlt individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item id="local-guides" classname="accordion-item">
            <AccordionTitle className="accordion-item-title">
              We're working with local guides
            </AccordionTitle>
            <AccordionContent className="accordion-item-content">
              <article>
                <p>We are not doing this along form our office</p>
                <p>
                  Instead, we are working with guides to ensure a safe and
                  pleasant vacation
                </p>
              </article>
            </AccordionContent>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item1", "item2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
