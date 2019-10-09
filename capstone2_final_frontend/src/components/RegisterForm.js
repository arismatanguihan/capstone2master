import React, {useState, useEffect} from 'react'

function RegisterForm() {
	// document.body.style.backgroundImage = "url('https://data.whicdn.com/images/188833300/original.gif')";
	//  document.body.style.backgroundRepeat = "no-repeat";
	//  document.body.style.backgroundPosition = "right"; 
	//  document.body.style.backgroundSize = "600px 768px";
	//  document.body.style.backgroundAttachment = "fixed";

	let [roles, setRoles] = useState([]);
	let [username, setUsername] = useState("");
	let [password, setPassword] = useState("");
	let [confirmpw, setConfirmpw] = useState("");
	let [roleId, setRoleId] = useState("")

	useEffect( () => {
		fetch("http://localhost:8080/roles/")
		.then( res => res.json())
		.then( data => {
			setRoles(data);
		})
	}, []);

	let displayOptions = () => 
		roles.map( role => <option key={role.id} value={role.id}>{role.name}</option>)

	let [usernameFieldError, setUsernameFieldError] = useState("");
	let usernameChangeHandler = (e) => {
		setUsernameFieldError("")
		if(e.target.value.trim() !== "") {
            setUsernameFieldError("");
            setUsername(e.target.value)  
			fetch("http://localhost:8080/users/isRegistered", {
                    method: 'post',
                    headers: {
                    	'Content-Type': 'application/json'
                    },
                    	body: JSON.stringify({username})
                    })
		.then(res => res.json())
        .then(function(data){
        	console.log(data)
            if(data===true){
                setUsernameFieldError(<div>Username already used.</div>)
            } else {
                 validation()
            }          
        })
        }else {
            setUsernameFieldError(<div>This field cannot be empty</div>);
        }
	}

	let [passwordFieldError, setPasswordFieldError] = useState("");
	let passwordChangeHandler = (e) => {
		setPasswordFieldError("")	
		if(e.target.value.trim() !== ""){
            setPassword(e.target.value)
            setPasswordFieldError("");
            validation()
        } else {
            setPasswordFieldError(<div>This field cannot be empty</div>);
        }
	}	

	let [confirmpwFieldError, setConfirmpwFieldError] = useState("");
	let confirmpwChangeHandler = (e) => {
		 setConfirmpwFieldError("")	
		if(e.target.value.trim() !== ""){
            setConfirmpw(e.target.value)
            setConfirmpwFieldError("");
            validation()
        } else {
        	setConfirmpwFieldError(<div>This field cannot be empty</div>);
        }
	}

	let roleChangeHandler = (e) => {
		setRoleId(e.target.value)
	}



	let [disabledBtn, setDisabledBtn] = useState(true);
	let validation = () => {      
         if(username !=="" &&
         	usernameFieldError ==="" &&            
            password !=="" &&
           	passwordFieldError ==="" &&
            confirmpw !=="" &&
            confirmpwFieldError ===""          
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
			username: username,
			password: password,
			roles: roles
		}
		// implement front end validation here
		fetch("http://localhost:8080/users/register/"+roleId, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
		})
		.catch(e => {
			alert("Please complete the form")
			console.log(e)
		});
			alert("Account registered successfully.");
		console.log("http://localhost:8080/users/register/"+roleId)
	}

	console.log(username, password, confirmpw, roles)
	return(
		<form className="text-center mt-4 align-items-center">
			<div className="form-group">
				<div className="display-4">Register</div><br/>
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
			<div className="form-group">
				<input
					className="col-5 text-center form-control mx-auto"
					type="password"
					placeholder="Confirm Password"
					value={confirmpw}
					autoComplete="false"
					onChange={confirmpwChangeHandler}
					onBlur={confirmpwChangeHandler}
				/>
				<small>{confirmpwFieldError}</small>
			</div>
			<div className="row m-0">
			    <div className="col-md-4 offset-md-4 text-center">
			    Role:
					<div className="form-group">
						<select className="form-control align-items-center" onChange={roleChangeHandler}>
							<option></option>
							{displayOptions()}
						</select>
					</div>
				</div>
			</div>
			<button 
				type="button"
				disabled={disabledBtn}
				className="btn btn-primary mt-3"
				onClick={submitClickHandler}
			>Register</button>
		</form>
	);
}

export default RegisterForm