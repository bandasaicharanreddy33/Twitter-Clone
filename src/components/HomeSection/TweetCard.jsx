import React from 'react'
import RepeatSharpIcon from '@mui/icons-material/RepeatSharp';
import { Avatar , Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FileUploadSharpIcon from '@mui/icons-material/FileUploadSharp';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { FavoriteSharp } from '@mui/icons-material';
const TweetCard = () => {
    const handleLiketweet = () =>
    {

    }
    const handleCreateRetweet = () =>
    {
        
    }
    const handleOpenReplyModel = () =>
    {

    }
    const handleDeleteTweet = () =>{
        console.log("tweet deleted");
        handleClose();
    }
    const handleEditTweet = () =>
    {

    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        console.log('Logout');
        handleClose();
    }
    const navigate = useNavigate();
  return (

    <div>
        {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
                <RepeatSharpIcon/>

        </div> */}
        <div className='flex space-x-5'>
            <Avatar
             onClick = {useNavigate(`/profile/${6}`)} 
            className='cursorPointer'
            alt='userName' 
            src='https://picsum.photos/200/300'/>
            <div className='w-full'>
                <div className='flex justify-between item-center'>
                    <div className='flex cursor-pointer items-center space-x-2'>
                        <span className='font-semibold'>Code With Charan</span>
                        <span className='text-gray-600'>@Codewithcharan .2m</span>
                        <img className='ml-2 w-5 h-5'src='data:image/png;base64,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'/>
                    </div>
                    <div>
                    <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                <MoreHorizRoundedIcon/>
                    
                    </Button>
                    <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                    <MenuItem onClick={handleEditTweet}>Edit</MenuItem>
                    </Menu>
                    </div>
                </div>
                <div className='mt-2'>
                    <div className='cursor-pointer'>
                        <p className='mb-2 p-0'> full stack project - Twitter clone with springboot and react</p>
                        <img className='w-[28rem] border border-gray-400 p-5 rounded-md' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNKmQTEvf6D4C8XOI4z2TDTfDCVlFm3qROg&usqp=CAU' alt = ''/>
                    </div>
                    <div className='py-5 flex flex-wrap justify-between items-center'>
                        <div className='space-x-3 flex items-center text-gray-600' >
                            <ChatBubbleOutlineSharpIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                            <p>43</p>
                        </div>
                        <div className={`${true? "text-pink-600" : "text-gray-600"} space-x flex items-center`}>
                            <RepeatSharpIcon onClick={handleCreateRetweet}></RepeatSharpIcon>
                        </div>
                        <div className={`${true? "text-pink-600" : "text-gray-600"} space-x flex items-center`}>
                        {true?<FavoriteBorderSharpIcon onClick={handleLiketweet} className='cursor-pointer'/>: <FavoriteSharp onClick={handleLiketweet} className='cursor-pointer'/>}
                        </div>
                        <div>
                            <BarChartSharpIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                            <p>430</p>
                        </div>
                        <div className='space-x-3 flex items-center text-gray-600' >
                                <FileUploadSharpIcon className='cursor-pointer' onClick = {handleOpenReplyModel}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TweetCard
