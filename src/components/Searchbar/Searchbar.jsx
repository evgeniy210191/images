import PropTypes from 'prop-types';
import {
  ButtonLabel,
  Input,
  SearchForm,
  SearchFormButton,
  SearchbarContainer,
} from './Searchbar.styled';
import { useState } from 'react';

function Searchbar({ onSubmit }) {
  const [message, setMessage] = useState('');
  const hendleSubmit = event => {
    event.preventDefault();
    onSubmit(message);
  };

  const hendleChange = event => {
    setMessage(event.target.value);
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={hendleSubmit}>
        <SearchFormButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormButton>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          value={message}
          placeholder="Search images and photos"
          onChange={hendleChange}
        />
      </SearchForm>
    </SearchbarContainer>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
