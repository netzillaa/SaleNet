import './css/App.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Card from './components/Card.js'
import RegisterSteps from './components/RegisterSteps.js'
import Container from '@material-ui/core/Container';
import data from './data'

export default function App() {
  const cards = data.map(ball => {
    return (
      <Card
        key={ball.id}
        {...ball}

      />
    )
  })

  return (
    <div>
      <Header />
      <Container >
        <RegisterSteps />
      </Container >
      {/* <section className="cards-list">
        <div className="row row-cols-4">
          {cards}
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
