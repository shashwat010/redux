import Navbar from './components/Navbar'
import {BrowserRouter as Router} from "react-router-dom";
import Input from './components/Input';
import {Provider} from 'react-redux'
import store from './components/redux/store';

function App() {
  return (
    <> 
    <Provider store={store}>
    <Router>
    <Navbar/>
    <Input/>
    </Router>
    </Provider>
    </>
  );
}

export default App;
