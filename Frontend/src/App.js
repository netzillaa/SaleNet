import './css/App.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Card from './components/Card.js'
import RegisterSteps from './components/RegisterSteps.js'
import Container from '@material-ui/core/Container';
import Layout from './Layout.js'
import data from './data'
import { BrowserRouter as Router, Route,  Routes} from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Container >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={"/asd"} component={RegisterSteps}></Route>
          </Route>
        </Routes>
      </Container >
      <Footer />
    </div>
  );
}
