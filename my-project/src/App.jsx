import './App.css';
import IstSection from './components/IstSection';
import ListComponent from './components/ListComponent';
import ParentComponent from './components/ListParent';



function App() {

  return (
    <div className='lg:flex w-full my-16 lg:items-center lg:justify-center '>
    <IstSection/>
    <ParentComponent/>
    </div>
  )
}

export default App
