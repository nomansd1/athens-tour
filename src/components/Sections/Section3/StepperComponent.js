import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  }
}));


export default function VerticalLinearStepper() {
  const classes = useStyles();

  return (
    <div>
      <Stepper orientation="vertical">
          <Step>
            <StepLabel>
              Meeting Point
            </StepLabel>
            <StepContent>
              <Typography>
                  Panepistimo- Athens
              </Typography>
            </StepContent>
          </Step>
          <Step>
            <StepLabel className="label">
            Greek Gods & Philosophers
            </StepLabel>
            <StepContent>
              <Typography>
                Walk along the trilogy of buildings 
                representing the Greek Gods and philosophers
                of Greece
              </Typography>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>
              All About Hermes
            </StepLabel>
            <StepContent>
              <Typography>
                Stroll along the former street of the 
                stock market and hear the story of God 
                of commerce
              </Typography>
            </StepContent>
          </Step>
      </Stepper>
    </div>
  );
}
