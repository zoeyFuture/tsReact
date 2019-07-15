import * as React from 'react';
import Button from './components/Button';

const { useState, useEffect } = React;

const Counter: React.SFC<any> = (props) => {
  const [count, setCount] = useState(0);

  /*
  * 在每次渲染之后（即render之后执行“副作用”）
  * 通过指定返回函数来清理数据
  * 
  * 参数：
  *   1、函数：func - 用于执行“副作用”的方法，返回一个函数则用来执行清理操作
  *   2、数组：[] - 
  *     a、不填写，表示每次render时都执行
  *     b、有值，表示依赖某个值，当值发生变化时，调用执行副作用
  *     c、空数组，只有在 DidMount时执行
  */
  useEffect(() => {
    console.info('useEffect - 执行“副作用”');

    return () => {
      console.info('useEffect - 清理“副作用”');
    }
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <>
      <p>Count: {count}</p>
      <Button onClick={handleClick}>+</Button>
    </>
  );
}

export default Counter;