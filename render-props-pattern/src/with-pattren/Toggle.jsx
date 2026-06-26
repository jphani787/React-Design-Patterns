import React, { useState } from "react";

function Toggle({ render }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {/* <h2>Toggle {isOpen ? "Show" : "Close"}</h2>
      {isOpen && <p>Some reander components</p>} */}
      {render(isOpen)}
    </div>
  );
}

export default Toggle;
