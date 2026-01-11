import Header from './components/Header'
import MainContent from './components/MainContent'
import WelcomeMessage from './components/WelcomeMessage'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'


const App = () => {

  return (
    <div>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <UserProfile name='Alice' age='25' bio='Loves hiking and photography' />
      <Footer />
    </div>
  )
}

export default App
