
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navBar'
import SideBar from './components/Sidebar/sideBar'
import Add from './pages/Add/add'
import List from './pages/List/List'
import { ToastContainer } from 'react-toastify';
import UserOrders from './pages/Order/UserOrder'


function App() {



  return (
    <>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="appContent">
        <SideBar />
        <Routes>
          <Route path='/add' element={<Add />} />
          <Route path='/list' element={<List />} />
          <Route path='/orders' element={<UserOrders />} />
        </Routes>
      </div>

    </>
  )
}

export default App
