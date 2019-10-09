import React, { useState, useEffect } from 'react'
import Book from './Book'
import { Link, Route } from 'react-router-dom';

function Books() {
	// document.body.style.backgroundImage = "url('https://i.pinimg.com/564x/88/a2/9b/88a29bd6a74392ab08a1037cd397e628.jpg')";
	//  document.body.style.backgroundRepeat = "no-repeat";
	//  document.body.style.backgroundPosition = "bottom right"; 
	//  document.body.style.backgroundAttachment = "fixed";

	let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []; 
	let [books, setBooks] = useState([]);

	useEffect( () => {
		{ displayFetchBook()}
	}, []);


	function displayFetchBook(){
		fetch("http://localhost:8080/books/")
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setBooks(data);
		});


	}

	let addToCart = (id, quantity) => {
		let book = books.filter( book => book.id === id)
		book[0].quantity = quantity;
		let item = cart.filter( item => item.id === id)
		if(!item[0]) {
			cart.push(book[0]);
		} else {
			cart = cart.map( item => {
				if(item.id===id) {
					item.quantity += quantity
				}
				return item;
			})
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		alert(quantity+" items added to cart");
	}

	let editClickHandler = (id, bookTitle) => {
		fetch("http://localhost:8080/books/edit/"+id,{
			method:'put',
			body: bookTitle
		});
		let updatedBooks = books.map(book => {
			if(book.id === id) {
				book.title = bookTitle;
			
			}
			return book;
		});

		setBooks(updatedBooks);
	}





	let displayBooks = () => {
		return books.map( book => 
			<Book 
				key={book.id}
				id={book.id}
				title={book.title}
				price={book.price}
				genre={book.genre}
				author={book.author}
				publisher={book.publisher}
				image={book.image}
				formatId={book.formatId}
				quantity={cart[book.id] ? cart[book.id] : 1}
				addToCart={addToCart}
				editClickHandler={editClickHandler}
				displayFetchBook={displayFetchBook}
			/>
		)
	}

	return(
		<div id="bookBG" className="card-columns px-5 pb-5">
			{displayBooks()}
		</div>
	);
}

export default Books;