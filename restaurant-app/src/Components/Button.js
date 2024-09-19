import './Button.css';

function Button({text}) {
  return (
    <>
      <button className="btn" type="button">{text}</button>
    </>
  );
}

export default Button;
