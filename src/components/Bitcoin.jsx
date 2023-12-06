import '../css/Bitcoin.css'
const Bitcoin =()=>{
    return(
        <div>
             <h1>Hello, World! Welcome to Bitcoin Home!</h1>
             <hr />
            <h2>Exchange rate</h2>
            <label htmlfor="text1">Enter Amount:</label>
            <input type="text" name="text1"/>
            <h3>Output:</h3>
            <button type="button" id="btn">Convert</button>
        </div>
    )
}
export default Bitcoin;