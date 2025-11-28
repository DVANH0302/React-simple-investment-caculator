import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonContainer="menu"
        button={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              States
            </TabButton>
          </>
        }
      >
        <div id="tab-content">{tabContent}</div>
      </Tabs>
    </Section>
  );
}
