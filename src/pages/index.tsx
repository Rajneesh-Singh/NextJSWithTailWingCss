import React, {useState} from 'react'
// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
// import TextField from '@mui/material/TextField';
import {Grid, TextField, Button } from '@material-ui/core';
import { classicNameResolver } from 'typescript';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [counter, setCounter] = useState(0)

  const incrementHandler = () => {
    setCounter(counter + 1)

  }
  const decrementHandler = () => {
    setCounter(counter - 1)
  }
  return (
<div className='flex items-center justify-center min-h-screen bg-zinc-300'>
    <Grid container spacing={5} className='bg-white h-60 flex items-center justify-center  align-center border-solid border-2 border-lightGray-500 rounded' style={{margin: 1}}   >
      <Grid item lg={12} md={12} xs={12}>
      <h1 className='text-3xl font-bold'>
        Counter
      </h1>
      </Grid>
      <Grid item lg={3} md={3} xs={3} >
        <TextField value={counter} id="outlined-basic" label="Counter" variant="outlined" />
        {/* <input type='text' /> */}
      </Grid>
      <Grid item  lg={2} md={2}  xs={4}>
        <Button variant='contained' color='primary' onClick={incrementHandler}>
          Increment +
        </Button>
       
      </Grid>
      <Grid item  lg={2} md={2}  xs={4}>
        <Button variant='contained' color='secondary' onClick={decrementHandler} 
        >
          Decrement -
        </Button>
      </Grid>

    </Grid>
</div>
  )
}
