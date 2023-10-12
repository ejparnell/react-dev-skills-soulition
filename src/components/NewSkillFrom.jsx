export default function NewSkillForm() {
    return (
        <form>
            <label for='skill'>Skill:</label>
            <input id='skill' type='text'/>
            <label for='level'>Level:</label>
            <select id='level'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <input type='submit' value='ADD SKILL'/>
        </form>
    )
}