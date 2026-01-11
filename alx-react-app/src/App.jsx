import Header from './Header'
import MainContent from './MainContent'
import WelcomeMessage from './components/WelcomeMessage'
import Footer from './Footer'
import UserProfile from './components/UserProfile'


const App = () => {

  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
      <UserProfile name='Alice' age='25' bio='Loves hiking and photography' />
    </div>
  )
}

export default App
