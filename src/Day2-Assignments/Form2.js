import React, { useRef } from 'react'

export default function Form2() {
   const name=useRef();
   const address=useRef();
   const email=useRef();
    const SubmitData =()=>{
        console.log(name.current.value)
        console.log( address.current.value)
        console.log(email.current.value)
        // event.preventDefault();
    }
  return (
    <div>
      <h5 style={{color:'orange'}}>Form by using UseRef</h5>
    

      <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput"  ref={name}> Name</label>
</div>
<div class="form-floating">
  <input type="email" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword" ref={email}>EMail</label>
</div>
<div class="form-floating">
  <input type="text" class="form-control" id="address" placeholder="Password"/>
  <label for="address" ref={address}>Address</label>
</div>
<br></br>
<button type="submit" class="btn btn-success" style={{width:'400px'}}>Login</button>
    </div>
  )
}
