import { Component, For, Show } from "solid-js";
import { Step } from "../../types/step";
import './step-list.css';

export const StepList: Component<{ steps: Step[] }> = (props) => {
    return (
        <div class="solution-container">
            <h1 class="heading solution-heading">Solution</h1>
            <Show when={props.steps.length} fallback={<div>This problem has no solution.</div>}>
                <table>
                    <thead>
                        <tr>
                            <th>Step</th>
                            <th>Bucket 1</th>
                            <th>Bucket 2</th>
                            <th>Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <For each={props.steps}>
                            {(step, index) =>
                                <tr>
                                    <td data-column='step'>{index() + 1}</td>
                                    <td data-column='bucket 1'>{step[0]}</td>
                                    <td data-column='bucket 2'>{step[1]}</td>
                                    <td data-column='explanation'>Jug 1 has {step[0]}L, Jug 2 has {step[1]}L.</td>
                                </tr>
                            }
                        </For>
                    </tbody>
                </table>
            </Show>
        </div>
    )
}