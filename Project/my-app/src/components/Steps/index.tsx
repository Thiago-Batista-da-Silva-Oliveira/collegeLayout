import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


type Props = {
  steps: {
    title: string;
    active: boolean;
    completed: boolean
  }[]
}

export const Steps = ({steps}:Props) => {
    return (
        <> 

    <Stepper>
          {steps.map((data:any) => {
          return (
            <Step key={data.title} active={data.active} completed={data.completed}>
              <StepLabel >{data.title}</StepLabel>
            </Step>
          );
        })}
     </Stepper>
           
        </>
    )
}