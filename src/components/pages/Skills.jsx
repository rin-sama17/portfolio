import { devSkills } from '../../constants/skills'
import { useEffect, useState } from 'react'
import { Skill } from './'
const Skills = () => {
  const [js, setJs] = useState(0)
  const [html, setHtml] = useState(0)
  const [css, setCss] = useState(0)
  const [react, setReact] = useState(0)
  const [git, setGit] = useState(0)
  const { htmlSkill, cssSkill, reactSkill, gitSkill, jsSkill } = devSkills
  useEffect(() => {
    const progressIncrease = (prevValue, progress) => {
      const deff = Math.random() * 10
      return Math.min(prevValue + deff, progress)
    }
    const timer = setInterval(() => {
      setJs((prevValue) => progressIncrease(prevValue, 57))
      setHtml((prevValue) => progressIncrease(prevValue, 95))
      setCss((prevValue) => progressIncrease(prevValue, 47))
      setReact((prevValue) => progressIncrease(prevValue, 60))
      setGit((prevValue) => progressIncrease(prevValue, 47))
    }, 200)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <>
    
      <Skill
        name={jsSkill.name}
        bgcolor={jsSkill.color}
       // icon={jsSkill.icon}
        value={js}
      />
      <Skill
        name={htmlSkill.name}
        bgcolor={htmlSkill.color}
       // icon={htmlSkill.icon}
        value={html}
      />
      <Skill
        name={cssSkill.name}
        bgcolor={cssSkill.color}
       // icon={cssSkill.icon}
        value={css}
      />
      <Skill
        name={reactSkill.name}
        bgcolor={reactSkill.color}
       // icon={reactSkill.icon}
        value={react}
      />
      <Skill
        name={gitSkill.name}
        bgcolor={gitSkill.color}
       // icon={gitSkill.icon}
        value={git}
      />
      ;
    </>
  )
}
export default Skills
