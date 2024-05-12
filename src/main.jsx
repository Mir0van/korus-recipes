import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import {ThemeProvider} from 'styled-components'
import {defaultTheme} from './themes/default'
import {antDefaultTheme} from './themes/antd-default';
import {ConfigProvider} from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ConfigProvider theme={antDefaultTheme}>
        <App />
      </ConfigProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
