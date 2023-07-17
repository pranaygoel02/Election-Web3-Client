import {useState, useEffect} from 'react'
import Input from '@/components/Input'
import { useStateContext } from '@/context'

function index() {

  const {age, setNewMinimumVotingAge} = useStateContext()

  const [newAge, setAge] = useState(age)
 

  return (
    <div className='container space-y-4'>
        <h1 className='heading'>Election Preferences</h1>
        <p className='subtitle'>Set qualification preferences to become a voter.</p>
        <form onSubmit={setNewMinimumVotingAge}>
            <Input cb={setAge} value={newAge} required={true} show={true} type='number' id='age' name='age' min='18' max='100' label='Minimum Age'/>
            <button className='primary-btn' type="submit">Save</button>
        </form>
    </div>
  )
}

export default index