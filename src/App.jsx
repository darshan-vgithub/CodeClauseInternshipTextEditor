import React, {  useRef, useState } from "react";
import "./App.css";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";

const App = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Rich Text Editor</h1>

      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
      <div className="content">{HTMLReactParser(content)}</div>
    </div>
  );
};

export default App;
