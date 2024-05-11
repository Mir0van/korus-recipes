import {NormalizeStyles} from './vendor-styled'
import {GlobalStyles} from './styled'
import Header from '../layout/header/Header'
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import PageWrapper from '../layout/page-wrapper/page-wrapper'

function App() {
  return (
    <>
      <NormalizeStyles />
      <GlobalStyles />
      <PageWrapper />
    </>
  )
}

export default App
