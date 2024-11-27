import { ParentComponent } from "solid-js"

type ButtonProps = {
    onClick?: () => void,
}

export const Button: ParentComponent<ButtonProps> = (props) => {
    return <button onClick={props.onClick}>{props.children}</button>
}