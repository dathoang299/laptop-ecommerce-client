import React from 'react'
import classNames from 'classnames';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import './AutocompleteSearch.scss';

const useInputStyles = makeStyles({
  root: {
    width: '50vw',
    height: '35px',
  },
  input: {
    boxSizing: 'border-box',
  },
});

const useInputLabelStyles = makeStyles({
  root: {
    fontSize: '14px',
  },
  outlined: {
    transform: 'translate(14px, 10px) scale(1)',
  },
});

function AutocompleteSearch(props) {
  const { classes } = props;
  const inputClasses = useInputStyles();
  const inputLabelClasses = useInputLabelStyles();
  return (
    <div className={classNames('Autocomplete', {
      [classes]: true,
    })}>
      <Autocomplete
        id="search-product"
        freeSolo
        options={['a', 'b']}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ 
              type: 'search',
              classes: inputClasses,
              ...params.InputProps,
            }}
            InputLabelProps={{
              classes: inputLabelClasses,
              ...params.InputLabelProps,
            }}
          />
        )}
      />
    </div>
  );
}

export default AutocompleteSearch;