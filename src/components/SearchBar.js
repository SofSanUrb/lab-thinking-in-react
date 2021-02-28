import React from 'react'

function SearchBar(props) {
    return (
        <div >
            <label for="product">Search</label>
            <input id="product" onChange={props.myChange} type="text" placeholder="Write product name"/> 
            <div>
                <input onClick={props.onCheck} type="checkbox"/>
                Only show products onStock
            </div>
        </div>
    )
}
export default SearchBar
