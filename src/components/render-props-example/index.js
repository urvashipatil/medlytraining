import React from "react";

export default function MyRenderPropComp({ render }) {
  return <div className="my-render-prop">{render()}</div>;
}
