import Login from './components/login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <h1 className='bg-amber-400 text-black'>This is one of the best card</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
