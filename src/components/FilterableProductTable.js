import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable(props) {
    const [products, setProd] = useState([])
    const [filterProducts, setFilterProd] = useState([])

    useEffect (() => {
        setProd(props.products.data)
        setFilterProd(props.products.data)
    }, [])

    const handleSearch = (event) => {
        let filterArr = products.filter(elem => {
            return elem.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setFilterProd(filterArr)
        console.log(filterProducts)
    }

    const handleCheck = (event) => {
        const filterArr = JSON.parse(JSON.stringify(filterProducts))
        let onStockArr = filterProducts.filter(elem => elem.stocked)
        if(event.target.checked) {
            setFilterProd(onStockArr)
        }
        else {
            setFilterProd(filterArr)
        } 
    }

    return (
        <div>
            <h1>IronStone</h1>
            <SearchBar onCheck={handleCheck} myChange={handleSearch}/>
            <ProductTable products={filterProducts}/>
        </div>
    )
}
export default  FilterableProductTable