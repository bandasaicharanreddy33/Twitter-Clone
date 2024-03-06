import React from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Brightness6SharpIcon from '@mui/icons-material/Brightness6Sharp';
import { Button } from '@mui/material';
const RightPart = () => {
    const handleChangeTheme = ()=>
    {
        console.log("handle Change theme")
    }
  return (
    <div className='py-5 sticky top'>
        <div className='relative flex items-center'>
            <input type='text' className='py-3 rounded-full text-gray w-full pl-12'/>
        <div className='absolute top-0 left-0 pl-3 pt-3'>
            <SearchSharpIcon className='text-gray-500'/>
        </div>
        <Brightness6SharpIcon onClick = {handleChangeTheme}/>
        </div>
    <section className='my-5'>
        <h1 className='text-xl font-bold'>
            Get Verified
        </h1>
        <h1 className='font-bold my-2'>subscribe to unlcok new features</h1>
        <Button variant='contained' sx={{padding:"10px",paddingX:"20px",borderRadius:'25px'}}> Get Verified</Button>
    </section>
    <section className='mt-7 space-y-5'>
        <h1 className='font-bold textxl py-1'>What's Happening</h1>
    </section>
    <div>
        <p className='text-sm'>
           Test Series Live
        </p>
        <p className='font-bold'> India vs England</p>
    </div>
    {[1,1,1,1,1].map((item)=> <div className='flex justify-between w-full'>
        <div>
            <p> Entertainment . Trending </p>
            <p className='font-bold'>#OoruPeruBhairavakona </p>
            <p>120k Tweets</p>
        </div>
    </div>)}
    

    <div>

    </div>
    </div>
  )
}

export default RightPart
