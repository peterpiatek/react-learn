import React from "react";

/* const withClass = props => (
  <div className={props.classes}>{props.children}</div>
); */

// another way of creating HOC (higher order component)
/**
 * 
 * @param {Component} WrappedComponent a component which is wrapper by WithClass component 
 * @param {css class} className a prop name to assign
 * implementation:
 * wrap exported module const with function withClass
 */

const withClass = (WrapperComponent, className) => {
  return (props) => 
    <div className={className}>
      <WrapperComponent {...props}/>
    </div>
}

export default withClass;
