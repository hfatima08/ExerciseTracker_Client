import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
 {/* ab poray app component kai pass access hai store ka */}
 {/* 3: Every feature is a slice, create slice in redux folder */}
 
<Provider store={store}>   
  <App/>
</Provider>

  </>
)
