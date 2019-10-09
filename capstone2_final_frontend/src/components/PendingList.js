import React, { useState, useEffect } from 'react';
import PendingListItem from './PendingListItem';


let PendingList = () => {
let userLocale = JSON.parse(localStorage.getItem("user"));
let [pendingItems, setPendingItems] = useState([]);

		useEffect( () => {
		fetch("http://localhost:8080/status/pending/")
			.then(res => res.json())
			.then(data => {
			setPendingItems(data);
		});
		}, []);
console.log(pendingItems)

let setToAccept = (id,status) => {
		fetch("http://localhost:8080/orderdetails/setstatus/" + id + "/accepted", {
			method: 'put'
		})
			.then(res =>
			console.log(res)
			)
		let updatedLists = pendingItems.filter(status => status.id !== id);
		setPendingItems(updatedLists);
		alert("Item Approved.");
}

let setToDeclined = (id,status) => {
		fetch("http://localhost:8080/orderdetails/setstatus/" + id + "/declined", {
			method: 'put'
		})
		.then(res =>
		console.log(res)
	)

	let updatedLists = pendingItems.filter(status => status.id !== id);
		setPendingItems(updatedLists);
		alert("Item Declined.");
	}

let deletePendingHandler = (id) => {
		if(window.confirm("Delete this pending item?")){
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


		let updatedList = pendingItems.filter( status => {
			return status.id !== id;
		});
		setPendingItems(updatedList);
		console.log(id);

		}
	}


let displayCartItems = () =>
		pendingItems.map(book =>
		<PendingListItem
		key={book.id}
		book={book}
		setToAccept={setToAccept}
		setToDeclined={setToDeclined}
		deletePendingHandler={deletePendingHandler}
		/>
)

function pendingListControl(){
if(userLocale.role.id === 1){
		return(
			<div id="pendingBG">
			<div className="table-responsive">
				<h1 className="text-center mt-2 mb-3 text-secondary">Pending</h1>
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
					<div id="pendingBG">
					<div className="table-responsive">
						<h1 className="text-center mt-2 mb-3 text-secondary">Pending</h1>
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
		{pendingListControl()}
		</React.Fragment>

	);
}

export default PendingList;