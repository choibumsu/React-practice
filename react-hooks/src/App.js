import React, { useEffect, useRef } from "react";
import { useInput } from "./hooks/useInput";
import { useTabs } from "./hooks/useTabs";
import { useTitle } from "./hooks/useTitle";
import { useClick } from "./hooks/useClick";
import { useHover } from "./hooks/useHover";
import "./App.css";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  const { currentItem, changeItem } = useTabs(0, content);

  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 2000);

  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  const hoverHello = () => console.log("hover hello");
  const hover = useHover(hoverHello);

  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
      <h1 ref={hover}>Hover</h1>
      <input placeholder="Name" {...name} />
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)} key={index}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
