import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import reportWebVitals from './reportWebVitals'

// import './index.css'
// import './assets/style/colors.css'
// import './assets/style/fonts.css'
// import './assets/style/bootstrap-grid.css'
// import 'react-phone-number-input/style.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()