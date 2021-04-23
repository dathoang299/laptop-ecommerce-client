import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Colors } from '../../constants';
import '../../constants/styles.scss';
import './OutlinedButton.scss';

const useStyles = makeStyles({
  outlined: {
    borderRadius: '10px',
    border: `1px solid ${Colors.PRIMARY}`,
    color: Colors.PRIMARY,
    padding: '3px 15px',
  },
});

function OutlinedButton(props) {
  const { className, children, ...rest } = props;
  const classes = useStyles();
  return (
    <Button
      variant='outlined'
      classes={classes}
      className={className}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default OutlinedButton;