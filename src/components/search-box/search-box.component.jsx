import React from 'react';

import './search-box.styles.css'


export const SearchBox = ({css, placeholder, handleChange}) => (
    <input
        className={css}
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
)