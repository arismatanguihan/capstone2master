import React, {useState, useEffect} from 'react';

import CartItem from './CartItem';

let Cart = () => {
	// document.body.style.backgroundImage = "url('https://i.pinimg.com/564x/2c/9a/46/2c9a46eee9e5b3d37d131b88daddec25.jpg')";
	//  document.body.style.backgroundRepeat = "no-repeat";
	//  document.body.style.backgroundPosition = "right"; 
	//  document.body.style.backgroundAttachment = "fixed";
	let userLocale = JSON.parse(localStorage.getItem("user"));
	let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
	let [updateCart, setUpdateCart] = useState(cart);



	let total = (updateCart.reduce( (total, item) => total += item.price*item.quantity, 0)).toLocaleString();
	localStorage.setItem("cart", JSON.stringify(updateCart))
	

	let deleteCartItems = (id) => {
		let CartItems = updateCart.filter( cart => {
			return cart.id !== id
		})
			setUpdateCart(CartItems);
	}



	let displayCartItems = () =>
		updateCart.map( book => 
			<CartItem 
			key={book.id}
			book={book}
			title={book.title}
			price={book.price}
			quantity={cart[book.id] ? cart[book.id] : 1}
			deleteCartItems = {deleteCartItems}
			checkoutClickHandler = {checkoutClickHandler} 
			/>
		)



	let checkoutClickHandler = () => {
		fetch("http://localhost:8080/orders/"+localStorage.getItem("userId"), {
			method: 'post',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({ date: Date.now() })
		})
		.then(res => res.json())
		.then(order => {
			cart.map( item => {
				fetch("http://localhost:8080/orderdetails/"+order.id+"/"+item.id, {
					method: 'post',
					headers: {
						'Content-Type' : 'application/json'
					},
					body: JSON.stringify({ quantity: item.quantity })
				})
				.then( res => res.json())
				.then ( orderdetail => {
					console.log(item);
				})
			});
		});
		localStorage.setItem("cart",[])
		setUpdateCart([])
		alert("Request Sent.");

		console.log(cart);
	}	





	function cartControl(){
		if(userLocale.role.id === 1){
	return(
	<div id="cartBG">
		<div className="table-responsive">
			<h1 className="text-center mt-2 mb-3">Request List</h1>
			<table className="table bg-transparent table-striped table-hover text-center mb-5 text-primary">
				<thead className="thead-light p-5">
					<tr>
						<th>Title</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Subtotal</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody className="mx-5">
					{displayCartItems()}
					<tr>
						<td></td><td></td><td>Total: </td><td>{total}</td>
					</tr>
				</tbody>
			</table>
		{/*	{showRequest()}*/}
		</div>
	</div>
	
		)
	}	

		else if(userLocale.role.id === 2){
	return(
	<div id="cartBG">	
		<div className="table-responsive">
			<h1 className="text-center mt-2 mb-3">Request List</h1>
			<table className="table bg-transparent table-striped table-hover text-center mb-5 text-primary">
				<thead className="thead-light p-5">
					<tr>
						<th>Title</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Subtotal</th>
						{<th>Action</th>}
					</tr>
				</thead>
				<tbody>
					{displayCartItems()}
					<tr>
						<td></td><td></td><td>Total: </td><td>{total}</td>
				<td><button onClick={checkoutClickHandler} className="btn btn-success mb-5">Proceed to Checkout</button></td>
					</tr>
				</tbody>
			</table>
				{/*	{showRequest2()}*/}
		</div>
	</div>
			)
		}
	}


		return(
		<React.Fragment>
		{cartControl()}
		</React.Fragment>

	);
}

export default Cart;