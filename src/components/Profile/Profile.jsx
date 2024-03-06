import React from 'react'
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
    const handleBack = () =>
    {
        navigate(-1);
    }
  return (
    <div>
        <section className={'z-50 flex items-center sticky top-0 bg-opacity-95'}>
            <KeyboardBackspaceSharpIcon className='cursor-pointer' onClick={handleBack}/>        
            <h1 className='oy-5 font-bold text-xl opacity-95 ml-5' > Code With Charan</h1>
        </section>
      
    </div>
  )
}

export default Profile
