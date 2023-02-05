import { useDispatch, useSelector } from "react-redux";

function App() {
  const count=useSelector(state=>state.counter)
  const dis=useDispatch();
  console.log(count)
  const fun1=()=>{
    dis({type:'inc'})
  }

  const fun2=()=>{
    dis({type:'dec'})
  }


  return (
    <div className="App">
    <button onClick={fun1}>+</button>{count.counter} <button onClick={fun2}>-</button>
    </div>
  );
}

export default App;
