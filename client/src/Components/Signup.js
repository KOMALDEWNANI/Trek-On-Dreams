import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Footer from './Footer';
import {signInWithGoogle} from "../FirebaseAuthentication";


function Signup() {

    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }

  return (
    <div className=" bg-slate-200">
        <h1 className="px-2 py-2 font-bold text-4xl 
            bg-slate-300 font-serif rounded-full text-center">
                Trek on Dreams
        </h1>
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 className = "text-lg font-bold" style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <div className='space-x-7'>
                    <Button type='submit' variant='contained' color='success'>Sign up</Button><Button type='submit' variant='contained' color='primary' onClick={signInWithGoogle}>Google</Button>
                    </div>
                </form>
            </Paper>
        </Grid>
        <Footer />
    </div>
  )
}

export default Signup