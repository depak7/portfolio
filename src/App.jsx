import Header from './components/Header'
import Profile from './components/Profile'
import Experience from './components/Experience'
import OpenSource from './components/OpenSource'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import Quote from './components/Quote'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <Profile />
      <Experience />
      <OpenSource />
      <Skills />
      <Projects />
      <Hackathons />
      <Quote />
      <Footer />
    </div>
  )
}

export default App
