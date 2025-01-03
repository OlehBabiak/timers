import { useState, useRef } from "react";

export default function Player() {
  const input = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleSubmit() {
    setEnteredPlayerName(input.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName || 'unknown entity'}</h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
