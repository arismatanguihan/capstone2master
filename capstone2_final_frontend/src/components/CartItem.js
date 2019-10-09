import React from 'react';

let CartItem = (props) => {
	let userLocale = JSON.parse(localStorage.getItem("user"));


		function acceptCartItems() {

		alert("Request Accepted.");
	}

	function cartDisplay(){
		console.log(props.book.title)
		if(userLocale.role.id === 1){
	return(
		<tr>
			<td>{props.book.title}</td>
			<td>{props.book.price}</td>
			<td>{props.book.quantity}</td>
			<td>{(props.book.quantity * props.book.price).toLocaleString()}</td>
			<td>
			<button onClick={ ()=> props.deleteCartItems(props.book.id)} className="btn btn-danger">Delete</button></td>
		</tr>
		)
	}

		else if(userLocale.role.id === 2){
		return(
		<tr>
			<td>{props.book.title}</td>
			<td>{props.book.price}</td>
			<td>{props.book.quantity}</td>
			<td>{(props.book.quantity * props.book.price).toLocaleString()}</td>
			<td><button onClick={ ()=> props.deleteCartItems(props.book.id)} className="btn btn-danger">Remove</button></td>
		</tr>
			)
		}
	}

			return(
		<React.Fragment>
		{cartDisplay()}
		</React.Fragment>

	);
}

export default CartItem;