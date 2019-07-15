import * as React from 'react';

import Counter from './Counter';

// 入口对象类型定义
interface Props extends React.Props<any> {
  type: any,
}

class App extends React.Component<Props, any> {
  constructor(props: any){
    super(props);

    this.state = {
      key: 1,
    };
  }

  public handleClick = () => {
    // this.setState(({ key }) => ({
    //   key: key + 1,
    // }));
  }

  public render() {
    const { key } = this.state;

    return (
      <div className="App">
        <Counter key={key} />

        <button onClick={this.handleClick}>new Counter Key</button>
      </div>
    );
  }
}

export default App;
