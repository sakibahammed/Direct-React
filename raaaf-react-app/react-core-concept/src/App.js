import logo from './logo.svg';
import './App.css';

function App() {
const products = [
  {name : 'laptop' , price : '23242'},
  {name : 'phone' , price : '73242'},
  {name : 'watch' , price : '33000'},
  {name : 'tablet' , price : '5000'}
]


  return (
    <div className="App">
      {/* <Product name="laptop" price="124242"></Product>
      <Product name="Phone" price='322'></Product>
      <Product name="Watch" price='3500'></Product> */}



      {
        products.map(product => <Product name= {product.name} price ={product.price}></Product>)
      }
    </div>
  );
}


function Product(props){
  return(
    <div className = "product">
      <h3>Name : {props.name}</h3>
      <p>Price : {props.price}</p>
    </div>
  )
}

export default App;
