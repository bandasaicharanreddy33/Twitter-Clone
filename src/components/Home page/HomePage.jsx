import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'
import RightPart from '../RightPart/RightPart'
import Profile from '../Profile/Profile'
import { Routes,Route } from 'react-router-dom'
// const HomePage = () => {
//   return (
//     <Grid container xs = {12} className='px-5 lg:px-36 justify-between'>
//         <Grid item xs = {0} lg = {2.5} className='hidden lg:block w-full relative'>
//             {/* <p className='text-center'>left part</p> */}
//             <Navigation/>
//         </Grid>
//         <Grid item xs = {12} lg = {6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
//           <Routes>
//             <Route path="/" element={<HomeSection />}></Route>
//             <Route path="/profile/:id" element={<Profile />}></Route>
//           </Routes>
//         </Grid>
//         <Grid item xs = {0} lg = {3} className='hidden lg:block w-full relative'>
//             <RightPart/>
//         </Grid>

//     </Grid>
//   )
// }

// export default HomePage
// import { Routes, Route } from 'react-router-dom';

const HomePage = () => {
  return (
    <Routes>
      {/* Adjust the parent route path to have a trailing "*" */}
      <Route path="*" element={
        <Grid container xs={12} className='px-5 lg:px-36 justify-between'>
          <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
            <Navigation />
          </Grid>
          <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
            {/* Nested routes go here */}
            <Routes>
              <Route path="/" element={<HomeSection />} ></Route>
              <Route path="/profile/:id" element={<Profile />}></Route>
            </Routes>
          </Grid>
          <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
            <RightPart />
          </Grid>
        </Grid>
      } />
    </Routes>
  );
};

export default HomePage;
