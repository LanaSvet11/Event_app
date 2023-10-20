import './App.css'
import EventForm from './components/EventForm'
import EventList from './components/EventList'

function App() {

  return (
    <>
      <h1>My Events</h1>
      <EventList />
      <EventForm />
    </>
  )
}

export default App
