import Analytic from './Analytic';
import Feature from './Feature';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen mb[100vh">
      <Header />
      <Hero />
      <Feature/>
      <Analytic/>
      <Footer/>
    </div>
  );
}
