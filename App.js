
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [signature, setSignature] = useState("");
  const [editorValue, setEditorValue] = useState("");

  useEffect(() => {
    // Fetch default signature from the server
    axios.get("http://localhost:3000/api/signature")
      .then((response) => {
        setSignature(response.data.signature);
        setEditorValue(response.data.signature);
      })
      .catch((error) => console.error("Error fetching signature:", error));
  }, []);

  const handleSave = () => {
    axios.post("http://localhost:3000/api/signature", { signature: editorValue })
      .then((response) => {
        alert("Signature updated successfully!");
        setSignature(editorValue);
      })
      .catch((error) => console.error("Error saving signature:", error));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Email Signature Editor</h1>
      <div style={{ marginBottom: "20px" }}>
        <textarea
          style={{
            width: "100%",
            height: "200px",
            padding: "10px", fontFamily: "Courier New, monospace", fontSize: "14px",
          }}
          value={editorValue}
          onChange={(e) => setEditorValue(e.target.value)}
        ></textarea>
        <button onClick={handleSave} style={{ marginTop: "10px", padding: "10px 20px" }}>
          Save
        </button>
      </div>
      <h2>Preview</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
        }}
        dangerouslySetInnerHTML={{ __html: signature }}
      ></div>
    </div>
  );
};

export default App;
