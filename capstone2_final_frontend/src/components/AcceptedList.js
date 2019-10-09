import React, { useState, useEffect } from 'react';
import AcceptedListItem from './AcceptedListItem';


let AcceptedList = () => {
let userLocale = JSON.parse(localStorage.getItem("user"));
let [acceptedItems, setAcceptedItems] = useState([]);

		useEffect( () => {
		fetch("http://localhost:8080/status/accepted/")
			.then(res => res.json())
			.then(data => {
			setAcceptedItems(data);
		});
	}, []);
console.log(acceptedItems)


let setToDeclined = (id,status) => {
		fetch("http://localhost:8080/orderdetails/setstatus/"+id+"/declined", {
			method: 'put'
		})
		.then(res =>
		console.log(res)
	)

	let updatedLists = acceptedItems.filter(status => status.id !== id);
		setAcceptedItems(updatedLists);
		alert("Item Declined.");
	}

let deleteAcceptedHandler = (id) => {
		if(window.confirm("Delete this accepted item?")){
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


		let updatedList = acceptedItems.filter( status => {
			return status.id !== id;
		});
		setAcceptedItems(updatedList);
		console.log(id);

		}
	}

let displayCartItems = () =>
		acceptedItems.map(book =>
		<AcceptedListItem
		key={book.id}
		book={book}
		setToDeclined={setToDeclined}
		deleteAcceptedHandler={deleteAcceptedHandler}
	/>
)


function acceptListControl(){
if(userLocale.role.id === 1){
	return(
		<div id="acceptBG">
			<div className="table-responsive">
				<h1 className="text-center mt-2 mb-3 text-secondary">Accepted</h1>
				<table className="table table-striped text-primary  mb-5">
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
		<div id="acceptBG">
			<div className="table-responsive">
				<h1 className="text-center mt-2 mb-3 text-secondary">Accepted</h1>
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
		{acceptListControl()}
		</React.Fragment>

	);

}

export default AcceptedList;