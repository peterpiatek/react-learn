import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import AuthContext from "../../../context/auth-context";

const Button = styled("a")`
  color: white !important;
  background-color: ${props => (props.listStatus ? "#369" : "red")};
  padding: 6px 10px;
  border-radius: 5px;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #396;
    color: black !important;
  }
  &.my-btn-danger {
    /* color: red !important; */
  }
`;

const Header = props => {

  const btnShowList = useRef(null);

  useEffect(() => {
    console.log('useEffect');
    const timer = setTimeout(() => {
      console.log('saved data to cloud');
      btnShowList.current.click();
    }, 800);
    return () => {
      console.log('useEffect -- unmounting');
      clearTimeout(timer);
    }
  }, [])
  
  const styles = [];

  if (props.showPeople) {
    styles.push("btn-secondary");
  }
  if (!props.showPeople) {
    styles.push("btn-primary");
  }

  return (
    <>
      <Button listStatus={props.showPeople} className="my-btn-danger">
        <span>Add test</span>
      </Button>
      <button
        className={"btn " + styles.join(" ")}
        ref={btnShowList}
        onClick={props.showhidePeople}
      >
        {props.showPeople === true ? "Hide" : "Show"}
      </button>
      <AuthContext.Consumer>
        {(context) => 
          <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer>
    </>
  );
};

export default Header;
