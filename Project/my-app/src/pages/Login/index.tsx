import {useState} from 'react'
import {Paper, Box, Typography, Button, TextField } from '@mui/material'

export const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    return (
        <>
           <Box sx={{height: "100vh", width: '100vw', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <Paper sx={{padding: '10px',height: '400px', width: '400px',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
                   <Box><img style={{width: '200px', height: '50px'}} src="logo.png" /></Box>
                   <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                       <TextField label="Email" variant="standard"  sx={{ width: '75%', padding: '10px'}} />
                       <TextField label="Senha" variant="standard"  sx={{ width: '75%', padding: '10px'}}  />
                   </Box>
                   <Box sx={{display: 'flex', flexDirection: 'column', width: '75%', marginBottom: '20px', alignItems: 'center'}}>
                       <Button sx={{width: '100%'}} variant="contained">Entrar</Button>
                       <Typography onClick={() => setIsSignIn(false) } sx={{marginTop: '10px', cursor: 'pointer'}}>
                           Não está matriculado?
                       </Typography>
                   </Box>
               </Paper>
           </Box>
        </>
    )
}