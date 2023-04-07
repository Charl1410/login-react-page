import React from 'react'

function Form() {
  return (
    <div>
        <h1>Welcome back</h1>
        <p>Please enter your details </p>

        <form>
            <div>
                <label>Email</label>
                <input 
                className='' 
                placeholder='Enter email'
                type='text'
                />
            </div>
            <div>
                <label>Password</label>
                <input 
                className='' 
                placeholder='Enter password'
                type='password'
                />
            </div>
            <div className='div for buttons'>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        id='remember'
                     />
                     <label for="remember">Remeber password</label> 
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Forgot password </button>
            </div>

        
            
        </form>
    </div>
  )
}

export default Form