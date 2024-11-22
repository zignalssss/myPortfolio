
import Leftsection from './sections/Leftsection';
import Rightsection from './sections/Rightsection';
import './App.css'
function App() {

  return (
   <div className='mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]'>
      <Leftsection/>
      <Rightsection/>
   </div>
  )
}

export default App
