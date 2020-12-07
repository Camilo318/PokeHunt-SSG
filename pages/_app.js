// import App from 'next/app'
import Layout from '../components/Layout'
import '../style.scss'
import {AppProvider } from '../components/AppProvider'
function MyApp({ Component, pageProps }) {

    return (
        <AppProvider> 
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppProvider>
    )
}
  
  
export default MyApp