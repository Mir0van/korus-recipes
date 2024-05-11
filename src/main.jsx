import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import {ThemeProvider} from 'styled-components'
import {defaultTheme} from './themes/default'
import {ConfigProvider} from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ConfigProvider theme={{
        token: {
          // Seed Token
          colorPrimary: defaultTheme.colorAccent,
          borderRadius: 2,

          // Alias Token
          colorBgContainer: '#f6ffed',
        },
      }}>
        <App />
      </ConfigProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
