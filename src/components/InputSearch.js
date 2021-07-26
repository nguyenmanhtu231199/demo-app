import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './InputStyle.css';
InputSearch.propTypes = {
      onSubmit: PropTypes.func,
};
InputSearch.defaultProp ={
    onSubmit : null,
}
function InputSearch(props) {
    const {onSubmit}=props;
    const [searchTerm,setSearchTerm] = useState('');
    const typingTimeOutRef = useRef(null);
    function hanldSearchChange (e){
        const inputValues = e.target.value;
        setSearchTerm(inputValues);
    if(!onSubmit) return;
    if(typingTimeOutRef.current){
        clearTimeout(typingTimeOutRef);
    }
    typingTimeOutRef.current= setTimeout(()=>{
        const formValues ={
            searchTerm: inputValues,
        };
        onSubmit(formValues);
    },300)
    
    }
    return (
        <div>
            <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm}
        onChange={hanldSearchChange} placeholder="Bạn muốn tìm kiếm gì "
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>
    );
}

export default InputSearch;