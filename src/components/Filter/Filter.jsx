import React from 'react';
import { Container, Input, Lebel } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilterValue } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const handleChange = e => {
  const { value } = e.currentTarget;
  dispatch(setFilter(value));
  }

  return (
    <Container>
      <Lebel>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </Lebel>
    </Container>
  );
};