
import Input from '../../share/Input';
import Button from '../../share/Button';

const SignUp = () => {

  const inputFields = [

    {
      label: 'First Name',
      placeholder: 'Enter your first name',
      name: 'firstName'
    },

    {
      label: 'Last Name',
      placeholder: 'Enter your last name',
      name: 'lastName'
    },

    {
      label: 'Phone',
      placeholder: 'Enter your phone number',
      name: 'phone'
    },

    {
      label: 'Email',
      placeholder: 'Enter your email',
      name: 'email'
    },

    {
      label: 'Password',
      placeholder: 'Enter your password',
      name: 'password'
    },
  ];

  return (
    <div style={{
      width: "30%",
      height: "100vh",
      display: "flex",
      display:"inline-flexbox",
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center",
      marginLeft:"50px",
      marginTop:"70px",
      gap:"3rem"

    }}>
      <h2>Sign Up</h2>
      {inputFields.map((field, i) => (<Input key={i} {...field} />
      ))}
      <div style={{margin:"2rem"}}>
      <Button text="Sign Up" backgroundColor="green" />
      </div>

      
    </div>
  );
};

export default SignUp;
