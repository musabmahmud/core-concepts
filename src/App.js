// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Person name="Musab" naika="sinmim"></Person>
        <Person name="Mahmud" naika="Islam"></Person>
        <Person name="Sabah" naika="Sadia"></Person>
        <Person name="Musu" naika="Sadu"></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border:'2px solid blue',
    margin: '10px',
    padding: '5px',
    textTransform: 'capitalize',
    width: '900px',
    backgroundColor: 'red',
    borderRadius: '10px'
  }
  return (
    <div style={personStyle}><h1>Hey i'm {props.name}, and My gf is {props.naika}</h1></div>
  )
}
export default App;
