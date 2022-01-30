import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Scene1 from './pages/scene/Scene1';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" component={<Scene1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
