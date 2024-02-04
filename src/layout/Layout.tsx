import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from './layout.module.scss'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className={styles.layout}>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
    
  )
}

export default Layout
