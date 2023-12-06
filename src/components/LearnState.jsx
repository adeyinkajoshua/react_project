import { useState } from "react"



const LearnState=()=>{
    const [count,setCount]=useState(0)

    function increament(){

        if(count <10){
            setCount (count + 1);
        }
        
            // if(count >= 10){
            //     return count
            // }
            // setCount(count+1 )

    }
    function decreament(){
        if(count >0){
            setCount (count -1);
        }
        
        
            // if(count <= 0){
            //     return count
            // }
            // setCount(count-1 )
    }
    function reset(){
        setCount(0 );

    }

    return(
        <div style={{display:"flex",justifyContent:"center",height:"100vh",alignItems:"center"}}>
            <div style={{display:"flex",gap:"2rem"}}>
                <button onClick={increament}style={{width:"50px"}} >+</button>
                <div style={{fontSize:"70px"}}>{count}</div>
                <button onClick={decreament}style={{width:"50px"}} >-</button>
                <button onClick={reset}style={{width:"70px"}} >Reset</button>
            </div>
        </div>
    )

}
export default LearnState;