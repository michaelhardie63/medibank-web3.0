import { Navbar, Welcome, Transactions, Footer } from './components';
import FeaturedImage from '../images/FeaturedImage.png';

const App = () => {
  return (
    <div className="min-h-screen site-container">
      <div className="gradient-bg-welcome">
        <Navbar />
        <img src={FeaturedImage} alt="" />
        <Welcome />
      </div>
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
