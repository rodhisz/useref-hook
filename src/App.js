import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {

  const linkRef = useRef(null)

  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })

  }
  return (
    <div className="App">
      <header className="App-header">

        <div onClick={() => goto(linkRef.current)}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros eros, maximus vel ornare vel, posuere eget ex. In in orci mollis, placerat diam sit amet, malesuada magna. Sed mauris justo, aliquam non finibus commodo, sollicitudin eget urna. Phasellus eu fermentum metus, sit amet finibus diam. Vivamus auctor tortor id tortor tristique efficitur. Donec volutpat tempor odio, ac venenatis est ornare id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper metus nec sodales varius. Nam vestibulum dui risus, et ornare ex luctus egestas.
        </p>
        <p>
          Nulla sed ultrices urna, malesuada sollicitudin massa. Maecenas et feugiat ante. Curabitur porta, sapien ut aliquam blandit, sapien ante tempus nisl, eu hendrerit nisl justo vel nulla. Nulla vel urna ac eros porta lobortis. Aliquam eget metus eget metus facilisis volutpat a nec est. Donec commodo vitae ex at ultrices. Fusce sagittis eleifend metus, eu malesuada massa convallis quis. Donec sem nunc, pulvinar sed ante sed, vehicula interdum lacus. Aenean bibendum congue nisi non pharetra.
        </p>
        <p>
          Cras viverra tellus et sem tristique congue. Nam quis commodo est. Nunc lacinia eleifend luctus. Aenean et sagittis mi, congue interdum libero. Duis porttitor tellus a felis pharetra, ac viverra lacus vestibulum. Fusce facilisis congue ligula, sed viverra ante varius ac. Vivamus tristique pharetra ex, eget luctus justo venenatis a.
        </p>
        <p>
          Cras viverra tellus et sem tristique congue. Nam quis commodo est. Nunc lacinia eleifend luctus. Aenean et sagittis mi, congue interdum libero. Duis porttitor tellus a felis pharetra, ac viverra lacus vestibulum. Fusce facilisis congue ligula, sed viverra ante varius ac. Vivamus tristique pharetra ex, eget luctus justo venenatis a.
        </p>
        <p>
          Cras viverra tellus et sem tristique congue. Nam quis commodo est. Nunc lacinia eleifend luctus. Aenean et sagittis mi, congue interdum libero. Duis porttitor tellus a felis pharetra, ac viverra lacus vestibulum. Fusce facilisis congue ligula, sed viverra ante varius ac. Vivamus tristique pharetra ex, eget luctus justo venenatis a.
        </p>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          ref={linkRef}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
