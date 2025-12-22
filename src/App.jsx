
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <>
    <Header/>
    <main>
      <HomePage />
    </main>
    <Footer/>
    </>
  )
}

function HomePage() {
  return (
    <>
    <h2>Welcome to React Router!</h2>
    <h2> Hompage</h2>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, et laborum accusamus fugiat repellat dolorem eligendi! Hic sint provident similique minus maxime, facilis omnis fugit nulla est, quam iure mollitia.
    </>
  )
}

export default App
