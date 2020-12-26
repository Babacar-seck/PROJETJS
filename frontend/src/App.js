
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';
import { BrowserRouter as Router} from "react-router-dom"
import Routes from './Routes';




function App() {
  return (
    <Router>
     <Layout> 
       <Routes/>
     </Layout>
    </Router>
  );
}

export default App;
