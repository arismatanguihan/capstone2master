import React, { useState, useEffect } from 'react';
import DeclinedListItem from './DeclinedListItem';

let DeclinedList = () => {
let userLocale = JSON.parse(localStorage.getItem("user"));
let [declinedItems, setDeclinedItems] = useState([]);

useEffect( () => {
	fetch("http://localhost:8080/status/declined/")
		.then(res => res.json())
		.then(data => {
		setDeclinedItems(data);
	});
}, []);

console.log(declinedItems)

let setToAccept = (id,status) => {
		fetch("http://localhost:8080/orderdetails/setstatus/"+id+"/accepted", {
			method: 'put'
		})
			.then(res =>
			console.log(res)
			)
		let updatedLists = declinedItems.filter(status => status.id !== id);
		setDeclinedItems(updatedLists);
		alert("Item Accepted.");
}

let deleteDeclinedHandler = (id) => {
		if(window.confirm("Delete this declined item?")){
			fetch("http://localhost:8080/orderdetails/delete/" + id,{
			method:'delete',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(id)
		})
		.then(res =>
		console.log(res)
	)


		let updatedList = declinedItems.filter( status => {
			return status.id !== id;
		});
		setDeclinedItems(updatedList);
		console.log(id);

		}
	}



let displayCartItems = () =>
		declinedItems.map(book =>
		<DeclinedListItem
		key={book.id}
		book={book}
		setToAccept={setToAccept}
		deleteDeclinedHandler={deleteDeclinedHandler}
	/>
)


function declinedListControl(){
	if(userLocale.role.id === 1){
		return(
		<div id="declineBG">
			<div className="table-responsive">
			<h1 className="text-center mt-2 mb-3 text-secondary">Declined</h1>
				<table className="table table-striped text-primary mb-5">
					<thead className="thead-light">
						<tr>
							<th>Title</th>
							<th>Author</th>
							<th>Quantity</th>
							<th>Date Borrowed</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{displayCartItems()}
					</tbody>
				</table>
			</div>
		</div>
		);
}
	else if(userLocale.role.id === 2){
		return(
		<div id="declineBG">
			<div className="table-responsive">
			<h1 className="text-center mt-2 mb-3 text-secondary">Declined</h1>
				<table className="table table-striped text-primary mb-5">
					<thead className="thead-light">
						<tr>
							<th>Title</th>
							<th>Author</th>
							<th>Quantity</th>
							<th>Date Borrowed</th>
						</tr>
					</thead>
					<tbody>
						{displayCartItems()}
					</tbody>
				</table>
			</div>
		</div>
		);
	}
}
	
	return(
		<React.Fragment>
		{declinedListControl()}
		</React.Fragment>

	);


}

export default DeclinedList;