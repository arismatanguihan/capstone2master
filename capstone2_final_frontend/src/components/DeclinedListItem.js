import React from 'react';

let DeclinedListItem = (props) => {
let userLocale = JSON.parse(localStorage.getItem("user"));
console.log(props)




function declinedControl(){
	if(userLocale.role.id === 1){
		return(
			<tr>
				<td>{props.book.book.title}</td>
				<td>{props.book.book.author}</td>
				<td>{props.book.quantity}</td>
				<td>{props.book.orderDetailOrder.date}</td>
				<td><button className="btn btn-success mr-2" onClick={() => props.setToAccept(props.book.id)}>Accept</button>
				<button className="btn btn-danger mr-2" onClick={() => props.deleteDeclinedHandler(props.book.id)}>Delete</button>
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
		{declinedControl()}
		</React.Fragment>

	);
}

export default DeclinedListItem;