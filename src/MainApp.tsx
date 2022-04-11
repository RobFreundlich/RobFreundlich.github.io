import {HelloWorld} from "com/freundlichs/HelloWorld";
import React from "react";

const MainApp = () => {
  return <html>
  <head>
    <title>Main App</title>
  </head>
  <body>
  {HelloWorld({message: new Date().toISOString()})}
  </body>
  </html>;
}

MainApp();
