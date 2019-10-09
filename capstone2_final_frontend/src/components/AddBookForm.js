
import React, { useState, useEffect } from 'react';

let AddBookForm = () => {
	// document.body.style.backgroundImage = "url('https://i.pinimg.com/564x/1e/fb/9a/1efb9ad771c1e6a99a3f2baf244eb1e2.jpg')";
	//  document.body.style.backgroundRepeat = "no-repeat";
	//  document.body.style.backgroundPosition = "right"; 
	//  document.body.style.backgroundAttachment = "fixed";
	let [formats, setFormats] = useState([]);

	let [title, setTitle] = useState("")
	let [price, setPrice] = useState("")
	let [genre, setGenre] = useState("")
	let [author, setAuthor] = useState("")
	let [publisher, setPublisher] = useState("")


	let [formatId, setFormatId] = useState("")
	let [file, setFile] = useState("");

	useEffect( () => {
		fetch("http://localhost:8080/formats/")
		.then( res => res.json())
		.then( data => {
			setFormats(data);
		})
	}, []);

	let displayOptions = () => 
		formats.map( cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)

	let titleChangeHandler = (e) => {
		setTitle(e.target.value)
	}

	let priceChangeHandler = (e) => {
		setPrice(e.target.value)
	}

	let genreChangeHandler = (e) => {
		setGenre(e.target.value)
	}

	let authorChangeHandler = (e) => {
		setAuthor(e.target.value)
	}

	let publisherChangeHandler = (e) => {
		setPublisher(e.target.value)
	}

	

	let formatChangeHandler = (e) => {
		setFormatId(e.target.value)
	}

	let submitClickHandler = () => {
		let newBook = {
			title,
			price,
			genre,
			author,
			publisher,
			formatId
		}

		fetch("http://localhost:8080/books/"+formatId, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newBook)
		})
		.then(res => res.json())
		.then(data => {
			
			let formData = new FormData();
			formData.append("file", file);
			alert("Book successfully added.")

			fetch("http://localhost:8080/books/upload/"+data.id, {
				method: 'post',
				body: formData
			})			
		})
		.catch(e => {
			alert("Please complete the form.")
			console.log(e)
		});

		console.log(newBook);
	}

	let imageChangeHandler = (e) => {
		setFile(e.target.files[0]);
	}

	return(
		<div id="addBookBG">
			<form encType="multipart/form-data" className="mb-0 pb-5 text-center px-5">
			<h1 className="text-center animated fadeIn mt-2">Add a Book</h1>
				<div className="form-group">
					Title: <input onChange={titleChangeHandler} type="text" className="col-8 offset-2 form-control text-center"/>
				</div>
				<div className="form-group">
					Price: <input onChange={priceChangeHandler} type="number" min="0" className="col-8 offset-2 form-control text-center"/>
				</div>
				<div className="form-group">
					Genre: <input onChange={genreChangeHandler} type="text" className="col-8 offset-2 form-control text-center"/>
				</div>
				<div className="form-group">
					Author: <input onChange={authorChangeHandler} type="text" className="col-8 offset-2 form-control text-center"/>
				</div>
				<div className="form-group">
					Publishers: <input onChange={publisherChangeHandler} type="text" className="col-8 offset-2 form-control text-center"/>
				</div>
				<div className="form-group">
					Format:
					<select className="col-8 offset-2 form-control" onChange={formatChangeHandler}>
						<option></option>
						{displayOptions()}
					</select>
				</div>
				Image: <input onChange={imageChangeHandler} type="file"/><br/>
				<button type="button" onClick={submitClickHandler} className="btn btn-success mt-4">Add Book</button>
			</form>
		</div>
	);
}

export default AddBookForm;