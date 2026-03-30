import React from "react";
function Child({flag}) {
  console.log("Child called")
  return <div>This is Child Component, the value of flag is {flag}</div>;
}
export default React.memo(Child);



