import {useState} from 'react'
import { Steps } from '../../components/Steps'
import {Grid, Paper, Box, TextField, Button, Tooltip,MenuItem,CircularProgress } from '@mui/material'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


export const Register = () => {

  const [step1, setStep1] = useState({completed: false, active: true})
  const [step2, setStep2] = useState({completed: false, active: false})
  const [step3, setStep3] = useState({completed: false, active: false})

  const handleFirstSubmit = () => {
      //Verificação

      //Se tudo correto 
     
      setStep1(() => ({
           completed: true, active: false
      }))

      setStep2(() => ({
        completed: false, active: true
   }))
  }

  const handleSecondSubmit = () => {
    //Verificação

    //Se tudo correto 
   
    setStep1(() => ({
         completed: true, active: false
    }))

    setStep2(() => ({
      completed: true, active: false
 }))

 setStep3(() => ({
    completed: false, active: true
}))
}

  const handleBackToFirstSubmit = () => {
    //Verificação

    //Se tudo correto 
   
    setStep1(() => ({
         completed: false, active: true
    }))

    setStep2(() => ({
      completed: false, active: false
 }))
}

  const steps = [
      {
        title: 'Dados Cadastrais',
        completed: step1.completed,
        active: step1.active
      },
      {
        title: 'Curso e Polo',
        completed: step2.completed,
        active: step2.active,
      },
      {
        title: 'Acompanhe sua matrícula',
        completed: step3.completed,
        active: step3.active
      }
]

const cursos = [
    {
        title: 'Administração',
        mensalidade: 'R$ 400,00',
        Duração: '4 Anos'
    },
    {
        title: 'Direito',
        mensalidade: 'R$ 800,00',
        Duração: '5 Anos'
    },
    {
        title: 'Engenharia de Software',
        mensalidade: 'R$ 600,00',
        Duração: '4 Anos'
    },
    {
        title: 'Enfermagem',
        mensalidade: 'R$ 500,00',
        Duração: '4 Anos'
    },
]

const polos = [
    {
        title: 'Santa Cruz',
    },
    {
        title: 'Sepetiba',
    },
    {
        title: 'Campo Grande',
    },
    {
        title: 'Paciência',
    },
]

    return (
    <>
    <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw'}}>
      <Steps steps={steps} />

{
   step1.active && (
    <Paper sx={{position:'relative',margin: 'auto', height: '500px', width: '800px'}} >

    <Grid sx={{padding: '10px'}} container>
        
        <Grid  item  md={6}>
        <TextField label="Email" variant="standard"  sx={{ width: '90%', padding: '10px'}} />
        <TextField label="Nome Completo" variant="standard"  sx={{ width: '90%', padding: '10px'}} />
        <TextField label="CPF" variant="standard"  sx={{ width: '90%', padding: '10px'}} />
        <TextField label="Número" variant="standard"  sx={{ width: '90%', padding: '10px'}} />
        <TextField label="RG" variant="standard"  sx={{ width: '90%', padding: '10px'}} />
        </Grid>

        <Grid  item md={6}>
        <TextField label="CEP" variant="standard"  sx={{ width: '90%', padding: '10px'}} />
        <TextField label="Cidade" variant="standard"  sx={{ width: '90%', padding: '10px'}} />
        <TextField label="Estado" variant="standard"  sx={{ width: '90%', padding: '10px'}} />
        <TextField label="Bairro" variant="standard"  sx={{ width: '90%', padding: '10px'}} />
        </Grid>

        <Button onClick={() => handleFirstSubmit()} sx={{width: '200px', position: 'absolute', bottom: '10px'}} variant="contained">Confirmar</Button>

    </Grid>

    </Paper>
   )
}

{
    step2.active && (
        <Paper sx={{position:'relative',margin: 'auto', height: '500px', width: '800px'}} >
            <Tooltip onClick={() => handleBackToFirstSubmit()} title="Voltar">
               <ArrowCircleLeftIcon sx={{fontSize: '30px', cursor: 'pointer'}} />
            </Tooltip>
   
    <Grid sx={{padding: '10px'}} container>

        <Grid  item md={12}>
        <TextField select label="Curso" variant="standard"  sx={{ width: '90%', padding: '10px'}}>
             {
                 cursos.map((info) => (
                        <MenuItem key={info.title} value={info.title}>
                            {info.title}
                        </MenuItem> 
                 ))
             }
        </TextField>
        <TextField select label="Polo" variant="standard"  sx={{ width: '90%', padding: '10px'}}>
        {
                 polos.map((info) => (
                        <MenuItem key={info.title} value={info.title}>
                            {info.title}
                        </MenuItem> 
                 ))
             }
        </TextField>
       
        </Grid>

        <Button onClick={() => handleSecondSubmit()} sx={{width: '200px', position: 'absolute', bottom: '10px'}} variant="contained">Confirmar</Button>

    </Grid>

    </Paper>
    )
}

{
    step3.active && (
       <Box sx={{margin: 'auto', color: 'white', background: 'orange', width: '100%', textAlign: 'center', fontSize: '25px', justifyContent: 'center', display: 'flex'}}>
            Dados em análise <CircularProgress sx={{height: '10px', marginLeft: '20px'}} />
       </Box>
    )
}
     
         
    </Box>
    </>

    )
}