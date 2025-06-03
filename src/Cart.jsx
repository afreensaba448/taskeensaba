const Cart=()=>{
    const items=["wireless earbuds","power bank","new ssd","hoddie"]
    return<>
    <h1>Cart 🛒</h1>
    {items.length>0 &&<h2>you have {items.length} items in your cart</h2>}
    <ul>
<h4>products</h4>
{items.map((item)=>(
        <li key={Math.random}>{item}</li>
))}
    </ul>
    </>

}

export default Cart;