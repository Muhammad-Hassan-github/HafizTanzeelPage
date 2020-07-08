import React from 'react';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { Avatar, Typography } from '@material-ui/core';


const BootstrapInput = withStyles((theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    }
  }),
)(InputBase);

const useStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    img: {
        height: 25,
        width: 30
    }
  }),
);

export default function CustomizedSelects(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState(props.options.length ? props.options[0].title : '');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.margin}>
        <Select
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
          id="demo-customized-select"
          labelId="demo-customized-select-label"
        >
            {
                props.options.map(option => (
                    <MenuItem value={option.title}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <Avatar variant="square" src={option.img} className={classes.img} />
                            <Typography style={{ marginLeft: 8 }}> 
                                {option.title}
                            </Typography>
                        </div>
                    </MenuItem>
                ))
            }
        </Select>
      </FormControl>
    </div>
  );
}