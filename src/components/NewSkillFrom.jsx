export default function NewSkillForm({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='skill'>Skill:</label>
            <input id='skill' type='text' name='skill'/>
            <label htmlFor='level'>Level:</label>
            <select id='level' name='level'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <input type='submit' value='ADD SKILL' />
        </form>
    )
}