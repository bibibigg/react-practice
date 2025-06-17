import Accordion from "./components/Accordion";
import AccordionContent from "./components/AccordionContent";
import AccordionTitle from "./components/AccordionTitle";
function App() {
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
    </main>
  );
}

export default App;
