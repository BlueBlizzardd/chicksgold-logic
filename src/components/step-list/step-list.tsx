import { Component, For, Show } from "solid-js";
import { Step } from "../../types/step";

export const StepList: Component<{ steps: Step[] }> = (props) => {
    return (
        <>
            <h1 class="heading">Solution</h1>
            <Show when={props.steps.length} fallback={<div>This problem has no solution.</div>}>
                <table>
                    <thead>
                        <tr>

                            <th>Bucket 1</th>
                            <th>Bucket 2</th>
                            <th>Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <For each={props.steps}>
                            {step =>
                                <tr>
                                    <td>{step[0]}</td>
                                    <td>{step[1]}</td>
                                    <td>Jug 1 has {step[0]}L, Jug 2 has {step[1]}L.</td>
                                </tr>
                            }
                        </For>
                    </tbody>
                </table>
            </Show>
        </>
    )
}