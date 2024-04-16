
import { useForm } from "../hooks/useForm";

export const FormularioComponent = () => {
  
  const initialForm = {
    userName: "",
    email:"",
    password:''
  }
  const {formState, onInputChange} = useForm(initialForm);

  const {userName,email,password} = formState;

  const onSubmit = (event)=>{
    event.preventDefault()
    console.log(formState)
  }


  return (
    <>
      <form onSubmit ={onSubmit} >
        <div className="m-group">
          <label htmlFor="">UserName</label>
          <input
            type="text"          
            className="form-control"
            name="userName"
            id="id_userName"
            placeholder="Enter user name"
            value ={userName}
            onChange = {onInputChange}
          ></input>
        </div>
        <div className="m-group">
          <label htmlFor="">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="id_email"
            placeholder="Enter email"
            value={email}
            onChange = {onInputChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="id_password"
            placeholder="Password"
            value={password}
            onChange = {onInputChange}
          ></input>
        </div>
        <button 
          type="submit" 
          className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
