import { useState } from "react";


function Test() {

    const [data, dataInput] = useState({
        name: '',
        email: '',
        state: '',
        message: ''
    })

    const [result, setResult] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    // this is another way of making your codes maintainable without having to use the usual procedure for our input. Here we start by storing our input as an object inside a usestate({name, email,state etc}). The ...data is a spread operator which is used to capture all the data in the usestate object. the e.target.name is a key while the e.target.value is the value.
// the name e.target.name is targeting the name attribute which targets the value name, email,, state, etc, i.e name="name", name="email" etc, Here only one usestate is controlling all the inputs by using the spread operator because there are situations where we have multiple input but the first method might not be applicable. When building a website, you have to consider a method that is good, cheap and manageable.
    const inputHandler = (e) => {
        dataInput({...data, [e.target.name]: e.target.value});
        console.log(e.target.value);
    }

    const database = [
        {
            name: 'Omowumi',
            email: '@gmail.com'
        }
    ]
const  [bool, setBool] = useState(false);
    // Logical operators ||, &&
    const sayHello = () => {
        if(data.name === database[0].name || data.email === database[0].email) {
            setResult('name found')
            setBool(true)
        } else {
            setResult('name not found!')
            setBool(false)
        }
    }
    
    let content = ''
    if (bool) { 
        content = <h1 className="text-info">{result}</h1>
    }else {
        content = <h1 className="text-danger">{errorMessage}</h1>
    }
    return(
        <>
        <div>
            <h1>{data}</h1>
        </div>
        <div>
            <input type="text" value={data.name} name= "name" onChange={inputHandler} className="form-control m-4" placeholder="name" />
            <input type="text" className="form-control m-4" value={data.email} name= "email" onChange={inputHandler} placeholder="email" />
            <input type="text" value={data.state} name= "state" onChange={inputHandler}className="form-control m-4" placeholder="state" />
            <textarea type="text" value={data.message} name= "message" onChange={inputHandler} className="form-control m-4" placeholder="message"></textarea>
<h1>{content}</h1>
            <div>
                {result}
            </div>
            <button className="btn btn-info mt-4 ms-4" onClick={sayHello}>Submit</button>
        </div>
        </>
    )
}
export default Test;