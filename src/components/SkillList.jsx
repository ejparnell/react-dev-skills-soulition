import SkillListItem from './SkillListItem'

export default function SkillList({ skills }) {
    return (
        <ul>
            {skills && skills.map(function(skill) {
                return <SkillListItem skill={skill}/>
            })}  
        </ul>
    )
}