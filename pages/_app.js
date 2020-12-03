// import App from 'next/app'
import Layout from '../components/Layout'
import '../style.scss'
function MyApp({ Component, pageProps }) {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
  
  
export default MyApp