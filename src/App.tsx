import { Suspense, lazy } from 'react'

import { Routes, Route } from 'react-router-dom'

import { Navbar } from './components'

const MotPage = lazy(() => import('./pages/mot/MotPage').then(module => {
  return { default: module.default }
}))

const FormPage = lazy(() => import('./pages/form/FormPage').then(module => {
  return { default: module.default }
}))

const FinishPage = lazy(() => import('./pages/finish/FinishPage').then(module => {
  return { default: module.default }
}))

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className='mainText'>

        <Suspense>

          <Routes>

            <Route path='/mot' element={ <MotPage /> } />

            <Route path='/form' element={ <FormPage /> } />

            <Route path='/finish' element={ <FinishPage /> } />

          </Routes>

        </Suspense>

      </main>

    </>
  )
}

export default App