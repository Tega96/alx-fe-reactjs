import Header from './components/Header'
import MainContent from './components/MainContent'
import WelcomeMessage from './components/WelcomeMessage'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'


const App = () => {

  return (
    <div>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <Counter />
      <UserProfile name='Alice' age='25' bio='Loves hiking and photography' />
      <Footer />
    </div>
  )
}

export default App
