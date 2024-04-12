import { Suspense, lazy } from 'react'
import './App.css'
import Counter from './components/Counter'
import Layout from './components/Layout'

const Users = lazy(() => import('./components/Users'))

const App = () => {
  return (
    <div className={'App-header'}>
      <Layout>
        <Counter />
        <Suspense fallback={<div>Loading...</div>}>
          <Users />
        </Suspense>
      </Layout>
    </div>
  )
}

export default App