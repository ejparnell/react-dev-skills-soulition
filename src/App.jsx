import { useState } from 'react'
import SkillList from './components/SkillList'
import NewSkillForm from './components/NewSkillFrom'
import './App.css'

const startingSkills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
]

function App() {

  const [skills, setSkills] = useState(startingSkills)

  function handleSubmit (event) {
    event.preventDefault()

    const newSkill = {
      name: event.target.skill.value,
      level: event.target.level.value
    }

    setSkills(function (preState) {
      return [...preState, newSkill ]
    })
    
    event.target.reset()
  }

  return (
    <>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr/>
      <NewSkillForm handleSubmit={handleSubmit}/>
    </>
  )
}

export default App
