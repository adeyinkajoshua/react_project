
import Input from '../../share/Input';
import Button from '../../share/Button';

const Login = () => {
  const inputFields = [
    { label: 'Email',
     placeholder: 'Enter your email',
      name: 'email' },
    { label: 'Password',
    
    placeholder: 'Enter your password',
     name: 'password' },
      
  ];

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection:"column",
      justifyContent: "center",
      marginBottom:"5rem",
      alignItems: "center"}}>

      
      {inputFields.map((field, i) => ( <Input key={i} {...field} />
      ))}
      <div  style={{margin:"2rem"}}>
      <Button text="Login" backgroundColor="blue" />
      </div>

      
    </div>
  );
};

export default Login;
