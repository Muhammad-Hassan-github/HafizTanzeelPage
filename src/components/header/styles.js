import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    height: '50px',
  },
  backIcon : {
    color: 'blue',
    margin: '10px'
  }
}));

export default useStyles;