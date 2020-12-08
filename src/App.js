import './App.css';

function App(props) {
  return (
    <div className="App">
      <header>
      <p>{props.post.title}</p>
      <p>{props.post.author}</p>
      <p>{props.post.body}</p>
      <p>{props.post.comments[2]}</p>

      </header>
    </div>
  );
}

export default App;
