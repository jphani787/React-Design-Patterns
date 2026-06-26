import { useState } from "react";

import "./App.css";
import MouseMovement from "./with-pattren/MouseMovement";
import MouseMovementChildern from "./with-pattren/MouseMovementChildern";
import Toggle from "./with-pattren/Toggle";
// import CarTracker from "./messy/CarTracker";
// import BikeTracker from "./messy/BikeTracker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center m-2">
      {/* <MouseMovement
        render={({ x, y }) => (
          <p>
            Render My car at ({x}, {x})
          </p>
        )}
      />
      <MouseMovement
        render={({ x, y }) => (
          <p>
            Render My bike at ({x}, {x})
          </p>
        )}
      /> */}

      {/* <MouseMovementChildern>
        {({ x, y }) => (
          <p>
            Children My car at ({x}, {x})
          </p>
        )}
      </MouseMovementChildern>

      <MouseMovementChildern>
        {({ x, y }) => (
          <p>
            Children My bike at ({x}, {x})
          </p>
        )}
      </MouseMovementChildern> */}

      <Toggle
        render={(isOpen) => (
          <div>
            <h2>Toggle {isOpen ? "Show" : "Hide"}</h2>
            {isOpen && <p>This is some how Toggle show and hide</p>}
          </div>
        )}
      />
    </div>
  );
}

export default App;
