import { useState } from 'react';
import React from 'react';
import './products.css';
import Alert from '../src/components/Alert.js';
function Addproductcategory({category}){
    return(
        <tr>
            <th colSpan="2"> 
                {category}
            </th>
        </tr>
    );
}
function Addproduct({product}){
    const name = product.stocked ? <span>{product.name} </span> : <span style={{color: 'red' }}>{product.name} </span>
    return(
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function Producttable({ products ,filteredText,inStockOnly}) {
    const rows = [];
    let lastCategory = null;
    
    products.forEach((product) => {
        if(inStockOnly && !product.stocked) return;
        if(product.name.toLowerCase().indexOf(filteredText.toLowerCase()) === -1) return;

        if(product.category !== lastCategory) {
            rows.push(
                <Addproductcategory
                category={product.category}
                key={product.category} />
            );
        }
        rows.push(
            <Addproduct
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });
    
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
}

function SearchBar({filteredText,inStockOnly,oncheckedstock,onfilterchange}){
    return(
        <form>
            <input type="text" 
            value={filteredText}
            placeholder="Search..." 
            onChange={(e) => onfilterchange(e.target.value)}/>
            <br/>
            <label>
                <input type="checkbox" checked = {inStockOnly} 
                onChange={(e) => oncheckedstock(e.target.checked)}
                /> {' '} 
                only show products in stock
            </label>
        </form>
    );
}

function FilteredProductstable({products}){
    const [inStockOnly,SetinStockOnly] = useState(false);
    const [filteredText,setFilteredText] = useState('');
    const [btnText,changebtnText] = useState("Enable Dark Mode");
    const [alert, setalert] = useState(null);
    const changealert = (message,type)=>{
        setalert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setalert(null);
        }, 2000);
    }
    const [mode,ChangeMode] = useState({
        color: 'black',
        backgroundcolor: 'white'
    });
    let handleMode = ()=>{
        if(mode.color === 'white'){
            ChangeMode({
                color: 'black',
                backgroundColor: 'white'
            });
            changebtnText("Enable Dark Mode");
            document.body.style.backgroundColor = 'white';
            changealert("Light Mode activated","warning");
        }
        else{
            ChangeMode({
                color: 'white',
                backgroundColor: 'black'
            });
            changebtnText("Enable Light Mode");
            document.body.style.backgroundColor = 'Black';
            changealert("Dark Mode activated","success");
        }
    }
    return(
        <>
        <div className="container">
            <Alert alert = {alert}/>
        </div>
        <div className="main" style={mode}>
            <SearchBar 
            filteredText = {filteredText} 
            inStockOnly = {inStockOnly}
            onfilterchange = {setFilteredText}
            oncheckedstock = {SetinStockOnly}
            />

            <Producttable 
            products = {products}
            filteredText = {filteredText} 
            inStockOnly = {inStockOnly}/>
            <div className="container my-2">
                <button type="button" className="btn btn-primary" onClick={handleMode}> {btnText}</button>
            </div>
            
        </div>
        </>
    );
}


const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}];

export default function App(){
    return <FilteredProductstable products = {PRODUCTS} />
}