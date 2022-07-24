import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Footer from './Footer';
import {signInWithGoogle} from "../FirebaseAuthentication";


const Login=()=>{

    const paperStyle={padding :20,height:'55vh',width:300, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <div className=" bg-slate-200">
            <h1 className="px-2 py-2 font-bold text-4xl 
            bg-slate-300 font-serif rounded-full text-center">
                Trek on Dreams
        </h1>
            <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2 className='text-lg font-bold'>Login</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <div className='space-x-7'>
                <Button type='submit' color='success' variant="contained" style={btnstyle} >Login</Button><Button type='submit' variant='contained' color='primary' onClick={signInWithGoogle}>Google</Button>
                    </div>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Don't have an account 👉
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
        <Footer />
        </div>
    )
}

export default Login