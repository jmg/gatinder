import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div className='bg-violet-900'>
    <Component {...pageProps} />
  </div>
}

export default MyApp
