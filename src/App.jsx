import { useState } from 'react'
import ShowList from './Componets/Showlist/ShowList'
import ShowSummary from './Componets/Show_summary/ShowSummary'
import {Routes,Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<ShowList/>} />
          <Route path='/show-summary/:id' element={<ShowSummary />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App
