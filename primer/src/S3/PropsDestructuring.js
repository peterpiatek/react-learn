/**
 * props destructuring
 */

import React from "react";

export default function PropsDestructuring({ name, age, born, children }) {
  return (
    <div>
      <div>My Name is: {name} </div>
      <div>I'm: {age} old </div>
      <div>Info: {born}</div>
      {children && <div>Other Info: {children}</div>}
    </div>
  );
}
