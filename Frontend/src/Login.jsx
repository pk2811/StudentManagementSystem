import React from 'react'

import "./Login.css"

const Login = () => {
  return (
    <div>
        <section className='container'>
            <form  className='form'>
                <h4 className='heading'>Login</h4>
                <div className='smallCont'>
                    <label htmlFor="">Username</label>
                    <input type='text'></input>
                </div>
                <div className='smallCont'>
                    <label htmlFor="">password</label>
                    <input type="password" />
                </div>
                <div className='smallCont'>
                    <button>Submit</button>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Login