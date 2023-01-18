import React,{useState} from 'react'
import '../form/Login.css';

const LoginForm = () => {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [pwdErr, setPwdErr] = useState(false);

    const loginHandler = (e) => {
        if(user.length < 3 || pwd.length < 3)
        {
            alert("Type Corrent UserName & Password");
        }
        else
        {
            alert("Form Successfully! Submitted :)");
        }

        e.preventDefault();
    }

    const userHanler = (e) => {
        let val = e.target.value;
        if(val.length < 3)
        {
            setUserErr(true);
        }
        else
        {
            setUserErr(false);  
        }
        setUser(val)

        // console.log(e.target.value);
    }

    const passwordHanler = (e) => {
        let val = e.target.value;
        if(val.length < 3)
        {
            setPwdErr(true);
        }
        else
        {
            setPwdErr(false);  
        }
        setPwd(val)
        // console.log(e.target.value);
    }

  return (
    <div>
      <form className='form1' onSubmit={loginHandler}>
        <input type="text" placeholder='Enter User Id' onChange={userHanler}/>
        <br/>
        {userErr?<span style={{color: "red"}}>User Not Valid</span> : ""}
        <br/><br/>
        <input type="text" placeholder='Enter Password' onChange={passwordHanler}/>
        <br/>
        {pwdErr?<span style={{color: "red"}}>Password Not Valid</span>: ""}
        <br/><br/>
        <button type="submit" className='submitBtn'>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
