import { createSignal, JSX } from 'solid-js'
import { Step } from './types/step';
import { pick } from './util/math';
import { Input } from './components/input/input';
import { Button } from './components/button/button';
import { StepList } from './components/step-list/step-list';
import './App.css'

export const App = () => {
  const [steps, setSteps] = createSignal<Step[]>([]);

  const handleSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSteps(pick(Number(data.get('jug1') as string), Number(data.get('jug2') as string), Number(data.get('amount'))));
  }

  return (
    <div class='container flex flex-column'>
      <h1 class='heading'>Water Jug Problem</h1>
      <div>This program is meant to calculate the Water Jug puzzle through
        the least amount of steps possible.
      </div>
      <form class='form flex flex-column' on:submit={handleSubmit}>
        <Input id='jug1' name='jug1' placeholder='First Jug' />
        <Input id='jug2' name='jug2' placeholder='Second Jug' />
        <Input id='amount' name='amount' placeholder='Liters' />
        <Button>Calculate</Button>
      </form>
      <StepList steps={steps()} />
    </div>
  )
}