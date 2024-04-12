import { Suspense, lazy } from 'react'
import './App.css'
import Counter from './components/Counter'

const Users = lazy(() => import('./components/Users'))

const App = () => {
  return (
    <div className={'App-header'}>

      <Counter />
      <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense>


    </div>
  )
}

export default App