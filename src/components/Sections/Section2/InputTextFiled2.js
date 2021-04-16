import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(2),
  },
  textField: {
    width: '16ch',
  
  },
}));

export default function InputTextField2() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
   
    weight: '',
    weightRange: '',
  
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  

  return (
<>


<div style={{display:"flex",}}>
   
          
   <div>
       <p>Pickup Date</p>
       <input placeholder="22 APRIL " style={{width:"50%",}}></input>
   </div>
   <div>
       <p>Pickup Time</p>
       <input placeholder="12:30PM" style={{width:"50%",}}></input>
   </div>


   


</div>
<br></br>

<Button variant="contained" color="secondary">
Secondary
</Button>



</>

    

        
     
  
  );
}
