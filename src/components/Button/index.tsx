import './styles.scss';

import { ButtonHTMLAttributes } from 'react';

// types do typeScript
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

// restOperator javascript, resto joga no ...props
export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
  );
}
