import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

import './AutocompleteSearch.scss';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '50vw',
  },
  input: {
    height: '35px',
  }
}));

function AutocompleteSearch() {
  return (
    <div className='Autocomplete'>
      <Autocomplete
        id="search-product"
        freeSolo
        options={['a', 'b']}
        renderInput={(params) => (
          <div
            ref={params.InputProps.ref}
            className='Autocomplete__inputWrapper'
          >
            <input
              type="text"
              className='Autocomplete__input'
              placeholder='Search your product'
            />
          </div>
        )}
      />
    </div>
  );
}

export default AutocompleteSearch;