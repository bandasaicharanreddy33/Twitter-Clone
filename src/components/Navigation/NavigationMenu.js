import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationIcon from "@mui/icons-material/Notifications";
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';  
import PendingIcon from '@mui/icons-material/Pending';
import { List } from "@mui/icons-material";
export const navigationMenu = [
    {
        title : "Home", 
        icon : <HomeIcon/>,
        path : "/home"
    },
    {
        title : "Explore", 
        icon : <ExploreIcon/>,
        path : "/Explore"
    },
    {
        title : "Notifications", 
        icon : <NotificationIcon/>,
        path : "/Notifications"
    },
    {
        title : "Messages", 
        icon : <MessageIcon/>,
        path : "/Messages"
    },
    {
        title : "Lists", 
        icon : <ListAltIcon/>,
        path : "/Lists"
    },
    {
        title : "Communities", 
        icon : <GroupAddRoundedIcon/>,
        path : "/Communities"
    },
    {
        title : "Verified", 
        icon : <VerifiedIcon/>,
        path : "/Verified"
    },
    {
        title : "Profile", 
        icon : <AccountCircleIcon/>,
        path : "/profile"
    },
    {
        title : "More", 
        icon : <PendingIcon/>,
        path : "/more"
    },
]