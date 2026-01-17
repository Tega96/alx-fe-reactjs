import Header from './components/Header'
import MainContent from './components/MainContent'
import WelcomeMessage from './components/WelcomeMessage'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import ProfilePage from './ProfilePage'
import { UserContext } from './UserContext'


const App = () => {

  const userData = {name: 'Jane Doe', email: "jane.doe@example.com" };

  return (
    <div>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <UserContext.Provider value={userData}>
        <ProfilePage  />
      </UserContext.Provider>
      <UserProfile name='Alice' age='25' bio='Loves hiking and photography' />
      <Footer />
    </div>
  )
}

export default App
