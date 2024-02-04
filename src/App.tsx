import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './app.module.scss'
import AdsContact from './pages/Home/AdsContact/AdsContact';
import Layout from "./layout/Layout";
import Hero from './pages/Home/Hero/Hero';
import About from './pages/Home/About/About';
import OurServices from './pages/Home/OurServices/OurServices';
import Contact from './pages/Home/Contact/Contact';

function App() {

  return (
    <div className={styles.app}>
      <Layout>
        <Hero />
        <About />
        <AdsContact />
        <OurServices />
        <Contact />
      </Layout>
    </div>
  )
}

export default App
