import React, { useEffect } from "react";

export const Hello = () => {
  useEffect(() => {
    // This work the same as componentDidMount() and componentWillUnmount()
    console.log("render");
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>Hello</div>;
};
