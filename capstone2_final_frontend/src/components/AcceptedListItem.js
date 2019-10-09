import React from 'react';



let AcceptedListItem = (props) => {
let userLocale = JSON.parse(localStorage.getItem("user"));
console.log(props)

function acceptControl(){
	if(userLocale.role.id === 1){
		return(
			<tr>
				<td>{props.book.book.title}</td>
				<td>{props.book.book.author}</td>
				<td>{props.book.quantity}</td>
				<td>{props.book.orderDetailOrder.date}</td>
				<td><button className="btn btn-warning mr-2" onClick={() => props.setToDeclined(props.book.id)}>Decline</button>
				<button className="btn btn-danger mr-2" onClick={() => props.deleteAcceptedHandler(props.book.id)}>Delete</button>
				</td>
			</tr>
			);
	}

	else if(userLocale.role.id === 2){
		return(
			<tr>
				<td>{props.book.book.title}</td>
				<td>{props.book.book.author}</td>
				<td>{props.book.quantity}</td>
				<td>{props.book.orderDetailOrder.date}</td>
			</tr>
			);

		}
	}

	return(
		<React.Fragment>
		{acceptControl()}
		</React.Fragment>

	);

}
export default AcceptedListItem;