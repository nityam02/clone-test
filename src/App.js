import RootRouter from "./router/rootRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
       <Router>
        <RootRouter />
      </Router>
  );
}

export default App;