import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
import toast from 'react-hot-toast'
import backendURL from '../backendurl'


const AdminDash = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [youtube, setYoutube] = useState('');
    const [instagram, setInstagram] = useState('');
    const [image, setImage] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();


        try {
           const res = await axios.post(`${backendURL}/upload`, {
                title, youtube, instagram, image
            });
            
            if (res.data.error) {
                toast.error(res.data.error)
            }else{
                toast.success('Post Created')
                navigate('/')
            }
        
        } catch (err) {
            // Handle error
            console.log(err)
        }
    };

    return (
        <div className='bg-[#200504] w-[100vw] h-[100vh] font-bold text-white flex flex-col items-center justify-center gap-5'>
        <h1>Create Post</h1>

        <form 
        onSubmit={onSubmit}
        className='w-[300px] bg-transparent border border-white px-4 py-7 rounded-lg flex flex-col items-center justify-center  gap-10'>
            <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}  className='w-[250px] px-4 py-3 rounded-md bg-transparent border  '/>
            <input type="text" placeholder='Toutube Link...' value={youtube} onChange={(e) => setYoutube(e.target.value)} className='w-[250px] px-4 py-3 rounded-md bg-transparent border  '/>
            <input type="text" placeholder='Instagram Link...' value={instagram} onChange={(e) => setInstagram(e.target.value)} className='w-[250px] px-4 py-3 rounded-md bg-transparent border  '/>
            <input type="text"  className='w-[250px] px-4 py-3 rounded-md bg-transparent border' onChange={(e) => setImage(e.target.value)}/>
            <button type='submit' className='w-[200px] bg-orange-800 px-2 py-3 rounded-md'>Create Post</button>
        </form>
    </div>
    );
}

export default AdminDash