import React, {useState} from 'react'
// import Background from '../image/loginwall.jpg'


import App from '../App.css'
function LoginForm(props) {

	// document.body.style.backgroundImage = "url('https://data.whicdn.com/images/188833300/original.gif')";
	//  document.body.style.backgroundRepeat = "no-repeat";
	//  document.body.style.backgroundPosition = "right"; 
	//  document.body.style.backgroundSize = "600px 768px";
	//  document.body.style.backgroundAttachment = "fixed";

	let [username, setUsername] = useState("");
	let [password, setPassword] = useState("");


	let [usernameFieldError, setUsernameFieldError] = useState("");
	let usernameChangeHandler = (e) => {
		// setUsername(e.target.value)
		   setUsernameFieldError("") 
        if(e.target.value.trim() !== ""){
            setUsername(e.target.value)
            setUsernameFieldError("");
            validation()
        } else {
            setUsernameFieldError(<div>This field cannot be empty</div>);
        }
	}


	let [passwordFieldError, setPasswordFieldError] = useState("");
	let passwordChangeHandler = (e) => {
		// setPassword(e.target.value)
		    setPasswordFieldError("") 
        if(e.target.value.trim() !== ""){
            setPassword(e.target.value)
            setPasswordFieldError("");
            validation()
        } else {
            setPasswordFieldError(<div>This field cannot be empty</div>);
        }
	}


	let [disabledBtn, setDisabledBtn] = useState(true);
	let validation = () => {      
         if(username !=="" &&            
            password !==""           
            ){
              setDisabledBtn(false)
            }
            else{
                return setDisabledBtn(true)
            }          
            return disabledBtn;
		} 





	let submitClickHandler = () => {
		let user = {
			username,
			password
		}
		fetch("http://localhost:8080/users/login", {
			method: 'post',
			headers: {
				'Content-Type': 'application/json' 
			},
			body: JSON.stringify(user)
		})
		.then(res => res.json())
		.then(data => {
			localStorage.setItem("user", JSON.stringify(data))
			localStorage.setItem("username",username);
			localStorage.setItem("userId",data.id);
			props.setIsLoggedIn(true);
		})
		.catch(e => {
			alert("Username and Password does not match.")
			console.log(e)
		});
		console.log(user)
	}


	return(
	
		<form className="text-center mt-4">
			<div className="form-group">
				<div className="display-4">Log-In</div>
				<br/>
				<input
					className="col-5 text-center form-control mx-auto"
					type="text"
					placeholder="Username"
					value={username}
					autoComplete="false"
					onChange={usernameChangeHandler}
					onBlur={usernameChangeHandler}
				/>
				<small>{usernameFieldError}</small>
			</div>
			<div className="form-group">
				<input
					className="col-5 text-center form-control mx-auto"
					type="password"
					placeholder="Password"
					value={password}
					autoComplete="false"
					onChange={passwordChangeHandler}
					onBlur={passwordChangeHandler}
				/>
					<small>{passwordFieldError}</small>
			</div>
			<button
				type="button"
				disabled={disabledBtn} 
				className="btn btn-primary mt-3"
				onClick={submitClickHandler}
			>Log In</button>
		</form>

	);
}


export default LoginForm;