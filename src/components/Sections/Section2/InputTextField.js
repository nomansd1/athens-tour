import React from 'react'

import clsx from 'clsx';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

import IconButton from '@material-ui/core/IconButton';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControl from '@material-ui/core/FormControl';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
function InputTextField({input_data}) {

const useStyles =makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    return (
        <div>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password" style={{fontSize:"14px"}}>{input_data}</InputLabel>
<OutlinedInput
  id="outlined-adornment-password"
  type="text"
  value={values.password}
  onChange={handleChange('password')}
  endAdornment={
    <InputAdornment position="end">
      {/* <IconButton  style={{marginTop:"-40px"}}
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {values.showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton > */}
     < ClearOutlinedIcon style={{marginTop:"-40px",width:"14px",marginRight:"-4px"}}  />
    </InputAdornment>
  }
  labelWidth={70}
/>
</FormControl>
        </div>
    )
}

export default InputTextField
