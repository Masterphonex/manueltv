import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
import toast from 'react-hot-toast'
import backendURL from '../backendurl'

const Admin = () => { 
const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(`${backendURL}/admin`, {
                username,
                password
            })

            if (response.data.error) {
                toast.error(response.data.error)
            }else{
                toast.success('Login Success')
                navigate('/ldjshvsdlvhdlvhbslrvhbelvablrblebvljhdblvrqbarlieuvebvebvebvrhlejbvlebrhvlhbl')
            }
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div className='bg-[#200504] w-[100vw] h-[100vh] font-bold text-white flex flex-col items-center justify-center gap-5'>
        <h1>Admin Login</h1>
        <form 
        onSubmit={onSubmit}
        className='w-[300px] h-[300px] bg-transparent border border-white px-4 py-4 rounded-lg flex flex-col items-center justify-center  gap-10'>
            <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}  className='w-[250px] px-4 py-3 rounded-md bg-transparent border  '/>
            <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-[250px] px-4 py-3 rounded-md bg-transparent border  '/>
            <button type='submit' className='w-[200px] bg-orange-800 px-2 py-3 rounded-md'>Login</button>
        </form>
    </div>
  )
}

export default Admin