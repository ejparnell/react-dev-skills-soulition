import SkillList from './components/SkillList'
import NewSkillForm from './components/NewSkillFrom'
import './App.css'

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
]

function App() {

  return (
    <>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr/>
      <NewSkillForm />
    </>
  )
}

export default App
