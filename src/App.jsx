import product1 from './product1.jpeg'
import product2 from './product2.jpeg'
import product3 from './product3.jpeg'
import './App.css'
import ProductCard from './ProductCard.jsx';

function App() {
  return (
    <>
      <div id="container">
        <ProductCard name={"my pc1"} info={"this pc is working"} price="$500"  path={product1}/>
        <ProductCard name={"my pc2"} info={"this pc is Good"} price="$700"  path={product2}/>
        <ProductCard name={"my pc3"} info={"this pc is Exilent"} price="$900"  path={product3}/>
      
      
      </div>
    </>
  )
}
export default App;   