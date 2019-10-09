import React, { useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Books from './components/Books';
import Cart from './components/Cart';
import AddBookForm from './components/AddBookForm';
import UploadImage from './components/UploadImage';
import AcceptedList from './components/AcceptedList';
import DeclinedList from './components/DeclinedList';
import PendingList from './components/PendingList';


function App() {
	let userLocale = JSON.parse(localStorage.getItem("user"));
	let [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("username") ? true : false)
	console.log(isLoggedIn)
	// console.log(userLocale.role.id)
	let renderRegisterForm = () => 
		<RegisterForm setIsLoggedIn={setIsLoggedIn} />	

	let renderLoginForm = () => 
		<LoginForm setIsLoggedIn={setIsLoggedIn} />
	
	let logoutClickHandler = () => {
				localStorage.removeItem("username");
				setIsLoggedIn(false);
	}
	
		
	
	function display(){
		if(isLoggedIn === false) {
		return(
		<React.Fragment>
		<div id="defaultBG" className="text-secondary">
			<nav className="navbar navbar-expand-sm navbar-light bg-transparent justify-content-center">
			  <ul className="navbar-nav my-3">
			    <li className="nav-item">
					<Link className="nav-link text-info" to="/register">Register</Link>
			    </li>
			    <li className="nav-item">
					<Link className="nav-link text-info" to="/login">Login</Link>
			    </li>
			  </ul>
			</nav>
			<div className="display-4 text-center p-1">
			Asset Management System
			</div>
			<div className="text-center p-1">
			Presented by:<br/>
			Aris Matanguihan
			<div>
				<Route path="/register" exact render={renderRegisterForm}/>
				<Route path="/login" exact render={renderLoginForm}/>
			</div>
			</div>
		
			<footer className="footer bg-dark text-white mt-5">
						<p className="text-center p-2 mb-1">© 2019 Asset Management System for Books. All rights reserved.</p>
						<p className="text-center m-0">Presented by: Aris Kristian Matanguihan of Zuitt Coding Bootcamp. No copyright infringement intended. This is for educational purposes only.</p>
			</footer>
		</div>
		
		</React.Fragment> 
		)	
	}

		else if(isLoggedIn === true && userLocale.role.id === 1){
		return(
		<React.Fragment>
			<nav className="navbar navbar-dark bg-secondary navbar-expand-lg sticky-top navbar-expand-sm justify-content-center">
				<button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbar-nav">
							<i className="fas fa-bars"></i>
							<div id="nav-icon2">
							</div>
				</button>


			<div id="navbar-nav" className="collapse navbar-collapse my-1">
				  <ul className="navbar-nav my-2 ml-auto">
				    <li className="nav-item">
						<Link className="nav-link" to="/books">Books</Link>
				    </li>
				    <li className="nav-item">
						<Link className="nav-link" to="/pending">Pending Request</Link>
				    </li>
				    <li className="nav-item">
						<Link className="nav-link" to="/accepted">Accepted Request</Link>
				    </li>
				    <li className="nav-item">
						<Link className="nav-link" to="/decline">Declined Request</Link>
				    </li>
				    <li className="nav-item">
						<Link className="nav-link" to="/cart">Request List</Link>
				    </li>
				    <li className="nav-item">
						<Link className="nav-link" to="/addbook">Add Book</Link>
				    </li>
					<li className="nav-item">
							<form className="form-inline">
							     <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
							     <button className="btn btn-info ml-1" type="submit">Search</button>
						    </form>
					</li>
				    <li className="nav-item">
						<button onClick={logoutClickHandler} className="btn btn-dark ml-1">Logout</button>
				    </li>
				  </ul>
		    </div>
			</nav>
			<div>
				<Route path="/books" exact component={Books}/>
				<Route path="/pending" exact component={PendingList}/>
				<Route path="/accepted" exact component={AcceptedList}/>
				<Route path="/decline" exact component={DeclinedList}/>
				<Route path="/cart" exact component={Cart}/>
				<Route path="/addbook" exact component={AddBookForm}/>
			</div>
			<footer className="footer bg-dark text-white">
						<p className="text-center p-2 mb-1">© 2019 Asset Management System for Books. All rights reserved.</p>
						<p className="text-center m-0">Presented by: Aris Kristian Matanguihan of Zuitt Coding Bootcamp. No copyright infringement intended. This is for educational purposes only.</p>
			</footer>
		</React.Fragment> 	
		)
	}

		else if(isLoggedIn === true && userLocale.role.id === 2){
		return(
		<React.Fragment>
			<nav className="navbar navbar-dark bg-secondary navbar-expand-lg sticky-top navbar-expand-sm justify-content-center">

				<button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbar-nav">
							<i className="fas fa-bars"></i>
							<div id="nav-icon2">
							</div>
				</button>

				<div id="navbar-nav" className="collapse navbar-collapse my-1">
					  <ul className="navbar-nav my-2 ml-auto">
					    <li className="nav-item">
							<Link className="nav-link" to="/books">Books</Link>
					    </li>
					    <li className="nav-item">
							<Link className="nav-link" to="/cart">Request List</Link>
					    </li>
					     <li className="nav-item">
							<Link className="nav-link" to="/pending">Pending Request</Link>
				   		</li>
					    <li className="nav-item">
							<Link className="nav-link" to="/accepted">Accepted Request</Link>
				   		</li>
					    <li className="nav-item">
							<Link className="nav-link" to="/decline">Declined Request</Link>
					    </li>
						<li className="nav-item">
								<form className="form-inline">
									 <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
									 <button className="btn btn-info ml-1" type="submit">Search</button>
								</form>
					    </li>
					    <li className="nav-item">
							<button onClick={logoutClickHandler} className="btn btn-dark ml-1">Logout</button>
					    </li>
					  </ul>
			    </div>
			</nav>
			<div>
				<Route path="/books" exact component={Books}/>
				<Route path="/cart" exact component={Cart}/>
				<Route path="/pending" exact component={PendingList}/>
				<Route path="/accepted" exact component={AcceptedList}/>
				<Route path="/decline" exact component={DeclinedList}/>
			</div>
			<footer className="footer bg-dark text-white">
						<p className="text-center p-2 mb-1">© 2019 Asset Management System for Books. All rights reserved.</p>
						<p className="text-center m-0">Presented by: Aris Kristian Matanguihan of Zuitt Coding Bootcamp. No copyright infringement intended. This is for educational purposes only.</p>
			</footer>
		</React.Fragment>
		)
	}

}

	// localStorage.setItem("cart", JSON.stringify([]))
  return (
  	<BrowserRouter>
	    <div className="App container-fluid">
	    	<div className="row">
	    		<div className="col-12 col-md-12 offset-md-0 p-0">
	    			{ display() }
	    		</div>
	    	</div>
	    </div>
	</BrowserRouter>
  );
}

export default App;
