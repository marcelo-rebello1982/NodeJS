import { ButtonHTMLAttributes } from 'react'
import '../styles/button.scss';

// types do typeScript
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}