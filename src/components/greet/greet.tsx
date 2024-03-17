import { GreetTypes } from "./greet.types"


const Greet = ({name}: GreetTypes) => {
  return (
    <div>{name ? `greet ${name}` : 'Guest'}</div>
  )
}

export default Greet