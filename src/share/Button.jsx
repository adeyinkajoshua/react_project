

const Button = ({ text, backgroundColor="blue" ,width="12rem"}) => {
  return (
    <button style={{ backgroundColor:backgroundColor,
      width:width,
      padding:"0.8rem 1rem",
      border:"noon",
      borderRadius:"0.5rem",
      color:'white'

    
    
    }}
    
    >{text}</button>
  );
};

export default Button;
