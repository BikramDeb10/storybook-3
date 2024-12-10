import "./Button.css";

type ButtonProps = {
  variant: string;
  text: string;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className={`btn ${props.variant}`}>{props.text}</button>
    </div>
  );
};

export default Button;
