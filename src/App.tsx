import styles from './app.module.scss'
import Hero from './components/Hero/Hero';
import Layout from "./layout/Layout";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className={styles.app}>
      <Layout>
        <Hero />
      </Layout>
    </div>
  )
}

export default App
