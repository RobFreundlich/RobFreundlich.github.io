import * as React from 'react';
import {hot} from "react-hot-loader/root";

interface Props
{
  name:
      string
}

class App extends React.Component<Props>
{
  public componentDidMount()
  {
    super.componentDidMount();
  }

  render()
  {
    const {name} = this.props;
    return (
        <>
          <h1>
            Hello {name}
          </h1>
        </>
    );
  }
}

export default hot(App);
