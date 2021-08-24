import React, { useMemo } from "react";
import _ from "lodash";

function Child({ count, changeCount }) {
  console.log("Child Redering");

  const calculate = useMemo(() => {
    let childeNumber = 0;
    for (let i = 0; i < 500000000; i++) {
      childeNumber++;
    }
    return childeNumber;
  }, []);

  return (
    <div
      onDoubleClick={() => {
        changeCount();
      }}
      style={{ width: "200px", height: "200px", border: "1px solid red" }}
    >
      <h4>
        Child - {count} -- {calculate}
      </h4>
    </div>
  );
}

// function myEqual(prevProps, nextProps) {
//   return false; //No rerendering required
//   // return false; //Always rerender
// }

export default React.memo(Child, _.isEqual);
