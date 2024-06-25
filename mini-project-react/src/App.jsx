
//import './App.css';
import Button from '@mui/material/Button';

function App() {
  let handleClick=() =>{
    console.log("button was clicked");
  };


  return (
    <>
    <h1>Material UI Demo</h1>
    <Button variant="contained" onClick={handleClick}>
      Click me!</Button>
      <Button variant="contained" onClick={handleClick} disabled>
      Click me2!</Button>
    </>
  );
}

export default App