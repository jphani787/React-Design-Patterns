import React, { useState } from "react";

export default function BikeTracker() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleTracker = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };
  return (
    <div className="border p-2 w-full h-48 my-2" onMouseMove={handleTracker}>
      My bike at is ({pos.x}, {pos.y})
    </div>
  );
}
