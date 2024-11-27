import { Component } from "solid-js"
import '../input/input.css'

type InputProps = {
    id: string,
    name: string,
    placeholder?: string,
}

export const Input: Component<InputProps> = (props) => {
    return (
        <>
            <label class="label" for={props.id}>{props.name}</label>
            <input class="box" id={props.id} name={props.name} type="number" min='1' max='1000' placeholder={props.placeholder} />
        </>
    )
}