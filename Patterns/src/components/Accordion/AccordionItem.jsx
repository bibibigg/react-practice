import { createContext, useContext } from "react";
import { useAccordionContext } from "./Accordion";
const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) {
    throw new Error("error");
  }
  return ctx;
}

export default function AccordionItem({ id, classname, children }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={classname}>{children}</li>
    </AccordionItemContext.Provider>
  );
}
