// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import Feedbacklist from './components/Feedbacklist'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import Aboutpage from './pages/Aboutpage'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
import Post from './components/Post'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

  return (
    <FeedbackProvider>
    <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route exact path='/' element={
          <>
          <FeedbackForm />
          <FeedbackStats />
          <Feedbacklist  />
          </>
        }>
        </Route>

      <Route path="/about" element={<Aboutpage />} />
      <Route path="/post/:id/:name/*" element={<Post />} />
    </Routes>
    {/* <Card>
        <NavLink to='/' activeClassName='active'>Home</NavLink>
        <NavLink to='/about' activeClassName='active'>About</NavLink>
     </Card> */}
    <AboutIconLink />
    </div>
    </Router>
    </FeedbackProvider>
  )
}

export default App
