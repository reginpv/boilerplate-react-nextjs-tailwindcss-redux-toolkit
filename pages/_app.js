import { Provider } from 'react-redux'
import store from '../store'

import '../src/scss/app.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
