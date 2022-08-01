import './App.css';
import Usestate from './Components/useState_Hooks/Usestate'
import Userefs from './Components/userefs_hooks/Userefs';
import Usereducer from './Components/useReducerhook/Usereducer';
import Useeffect from './Components/useEffect_hook/Useeffect';
import UseLayout from './Components/uselayout_hook/UseLayout';
import UseImperativeHandle from './Components/useImperativeHandle/UseImperativeHandle';
import UseContext from './Components/useContext_hook/UseContext';
import Usememo from './Components/usememo_hook/Usememo';
import UseMemo2 from './Components/usememo_hook/UseMemo2';
import Usecallback from './Components/useCallback_hook/Usecallback';

function App() {
  return (
    <div className="App">
      {/* <Usestate/> */}
      <Usereducer/>
      {/* <Useeffect/> */}
      {/* <Userefs/> */}
      {/* <UseLayout/> */}
      {/* <UseImperativeHandle/> */}
      {/* <UseContext/> */}
      {/* <Usememo/>   */}
      {/* <UseMemo2/> */}
      {/* <Usecallback/> */}
    </div>
  );
}

export default App;
