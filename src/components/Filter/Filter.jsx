import React from "react";
import PropTypes from 'prop-types';
import { FilterContainer, Input } from "./Filter.styled";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/contactsSlice";

const Filter = ()=>{
    const dispatch = useDispatch();
    return(
        <FilterContainer>
            <Input type="text" onChange={e=>dispatch(setFilter(e.target.value))}  placeholder='Find contacts by name' />
        </FilterContainer>
    )
};

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Filter;