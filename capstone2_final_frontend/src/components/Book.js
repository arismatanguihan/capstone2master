import React, { useState, useRef } from 'react';
import App from '../App.js';
import PendingListItem from './PendingListItem';
import AcceptedListItem from './AcceptedListItem';
import DeclinedListItem from './DeclinedListItem';

function Book(props) {
	// let bookInput  = useRef(null);
	let [title, setTitle] = useState(props.title);
	let [price, setPrice] = useState(props.price);
	let [genre, setGenre] = useState(props.genre);
	let [author, setAuthor] = useState(props.author);
	let [publisher, setPublisher] = useState(props.publisher);
	let [edit, setEdit] = useState(false);
	let userLocale = JSON.parse(localStorage.getItem("user"));
	let [quantity, setQuantity] = useState(props.quantity);
	let [books, setBooks] = useState([]);

	let atcClickHandler = () => {
		props.addToCart(props.id, quantity*1);
		setQuantity(1);
	}	

	let deleteClickHandler = () => {
		if(window.confirm("Delete book?")){
			fetch("http://localhost:8080/books/delete/"+props.id,{
			method:'delete',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(props.id)
		})
		.then(res => res)
		.then(res => {
		props.displayFetchBook();
		})
		alert("Item deleted.");

		let updatedBooks = books.filter( book => {
			return book.id !== props.id;
		});
		setBooks(updatedBooks);
		console.log(props.id);

	}
	}


	 let editClickHandler = (e) => {

	let books = {
	id: props.id,
	title: title,
	price: price,
	genre: genre,
	author: author,
	publisher: publisher,
	image: props.image
	}
	console.log(books)


		fetch("http://localhost:8080/books/edit/"+ props.id, {
		method: 'put',
		headers: {
		'Content-Type' : 'application/json'
		},
		body: JSON.stringify(books)
		})
		.then(res => res)
		.then(data => {
		props.displayFetchBook();
		});
		alert("The item has been edited.");
	}


		let bookTitleChangeHandler = (e) => {
	setTitle(e.target.value);
	}

	let bookPriceChangeHandler = (e) => {
	setPrice(e.target.value);
	}

	let bookGenreChangeHandler = (e) => {
	setGenre(e.target.value);
	}

	let bookAuthorChangeHandler = (e) => {
	setAuthor(e.target.value);
	}

	let bookPublisherChangeHandler = (e) => {
	setPublisher(e.target.value);
	}

	// let titleSubmit = function(event){
	// 	if(event.key === "Enter"){
	// 		props.editClickHandler(props.id, title);
	// 		setEdit(false);
	// 	}
	// }


	// let inputChangeHandler = function(e) {
	// setTitle(e.target.value);
	// }

	let editHandler = function() {
	setEdit(true);
	}

	// let showEditInput = function() {
	// 	if(!edit) {
	// 		return(
	// 			<b>
	// 			{ props.title }
	// 			</b>
	// 			);
	// 			} 
	// 	else {
	// 			return(
	// 			<input
	// 			ref={bookInput} 
	// 			// onKeyPress={titleSubmit}

	// 			onChange={bookTitleChangeHandler} 
	// 			type="text" 
	// 			value={title}
	// 		/>
	// 	);
	// 	}
	// }


	// function saveHandler(){
	// 	{titleSubmit()}
	
	// }

	function userControl(){
		if(userLocale.role.id === 1){
	return(
		<div className="card border-dark bg-light text-dark text-center mt-5">
		  <div className="container-fluid">
		  	<img className="card-img-top" style={{"width":"45%","height":"50%"}} src={"http://localhost:8080/image/"+props.image} alt="book"/>
		  </div>
		  <div className="card-body container-fluid p-5">
		  <h5 className="card-title">Title
			<br/>
		    <input
				type="text"
				className="form-control text-center"
				value={title}
				onChange={bookTitleChangeHandler} 
				/>
		   </h5>
		    <h5 className="card-text">
		    	 <p className="card-title">Price</p>
		    	 <input
				type="number"
				className="form-control text-center"
				value={price}
				onChange={bookPriceChangeHandler} 
				/><br/>
		    	 <p className="card-title">Genre</p>
		    	 <input
				type="text"
				className="form-control text-center"
				value={genre}
				onChange={bookGenreChangeHandler} 
				/><br/>
		    	<p className="card-title">Author</p>
		    	 <input
				type="text"
				className="form-control text-center"
				value={author}
				onChange={bookAuthorChangeHandler} 
				/><br/>
		    	<p className="card-title">Publisher</p>
		    	 <input
				type="text"
				className="form-control text-center"
				value={publisher}
				onChange={bookPublisherChangeHandler} 
				/><br/>
				<br/>
		    	Quantity:  
		    	<input
		    		disabled
		    		className="text-center form-control mx-auto"
		    		style={{"width":"50%"}} 
		    		type="number"
		    		max="99"
		    		min="1" 
		    		value={quantity}
		    		onChange={e => setQuantity(e.target.value)} 
		    	/><br/>
			
				{/*<button onClick={editHandler} className="btn btn-info mt-3 m-1">Edit Book</button>*/}

				<button onClick={editClickHandler} className="btn btn-info mt-3 m-1">Save</button>
				<button onClick={deleteClickHandler} className="btn btn-danger mt-3 m-1">Delete Book</button>

		    </h5>
		  </div>
		</div>
			)
		}
	
		else if(userLocale.role.id === 2){
	return(
			<div className="card border-dark bg-light text-dark text-center mt-5">
			 <div className="container-fluid">
			  	<img className="card-img-top" style={{"width":"45%","height":"50%"}} src={"http://localhost:8080/image/"+props.image} alt="book"/>
			 </div>
			  <div className="card-body container-fluid p-3">
			    <h4 className="card-title">{props.title}</h4>
			    <p className="card-text">
			    	Php {props.price}<br/>
			    	Genre: {props.genre}<br/>
			    	Author: {props.author}<br/>
			    	Publisher: {props.publisher}<br/>
			    	Quantity:  
			    	<input
			    		className="text-center form-control mx-auto"
			    		style={{"width":"50%"}} 
			    		type="number"
			    		max="100"
			    		min="1" 
			    		value={quantity}
			    		onChange={e => setQuantity(e.target.value)} 
			    	/><br/>
					<button onClick={atcClickHandler} className="btn btn-success mt-3 m-1">Request Book</button>

			    </p>
			  </div>
			</div>
		
			)
		}
	}

		return(
		<React.Fragment>
		{userControl()}
		</React.Fragment>
	);
}

export default Book;