import SkillListItem from './SkillListItem'

export default function SkillList({ skills }) {
    return (
        <ul>
            {skills && skills.map(function(skill, idx) {
                return <SkillListItem skill={skill} key={idx}/>
            })}  
        </ul>
    )
}