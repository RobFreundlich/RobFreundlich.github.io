import * as React from "react";

export type HelloWorldProps =
    {
      message: string;
    }

export const HelloWorld = (props: HelloWorldProps) => {
  return <div>HelloWorld {props.message}</div>;
}
