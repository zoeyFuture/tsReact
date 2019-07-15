import * as React from 'react';

import Button from './Button';

const initialState = {
  clickCounts: 0
};

type State = Readonly<typeof initialState>;

class ButtonCounter extends React.Component<any, State> {
  readonly state: State = initialState;

  public render() {
    const { clickCounts } = this.state;

    return (
      <>
        <Button onClick={this.handleIncrement}>+</Button>
        <Button onClick={this.handleDecrement}>-</Button>
        You've clicked me {clickCounts} times;
      </>
    );
  }

  private handleIncrement = () => {
    this.setState((prevState: State) => ({
      clickCounts: prevState.clickCounts + 1,
    }));
  }

  private handleDecrement = () => {
    this.setState((prevState: State) => ({
      clickCounts: prevState.clickCounts - 1,
    }));
  }
}