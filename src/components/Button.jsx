import "./styles/Button.css"

const mapButtonSizeToPixel = {
  sm : "60px",
  lg : "250px",
};

const mapButtonTypeToColor ={
  normal : "black",
  primary : "blue",
  danger : "red",
};

function Button({label, onClickButton, size , type}) {
  //size = "sm | "lg"
  //type = "normal" | "primary" | "danger"
  const buttonSize = mapButtonSizeToPixel[size];
  const buttonColor = mapButtonTypeToColor[type];
  return (
    <button className="todo-button" style={{backgroundColor : buttonColor, color: 'white', width:buttonSize}} 
    onClick={onClickButton}>{label}</button>
  )
}

export default Button