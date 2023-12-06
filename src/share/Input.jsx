

const Input = ({ label, placeholder, ...rest }) => {

  return (
    <div >
      <label>{label}</label>
      <input className="form-control" type="text" placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Input;
