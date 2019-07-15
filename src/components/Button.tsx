import * as React from 'react';

type Props = {
  onClick(e: React.MouseEvent<HTMLElement>): void,
  color?: string,
};

const Button: React.SFC<Props> = ({ onClick: handleClick, color, children }) => {
  return (
    <button style={{color}} onClick={handleClick}>{children}</button>
  );
};

export default Button;