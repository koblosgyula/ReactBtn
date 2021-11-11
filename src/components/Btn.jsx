import { Link } from "react-router-dom";
import "./Btn.scss";

export const InnerBtn = (props) => {
  const { label, upperCase } = props;
  return (
    <div className={`label ${upperCase ? "capitalize" : ""}`}>
      {`${label ? label : "Add label"}`}
    </div>
  );
};

export const Btn = (props) => {
  const { variant, href, onClick, className, disabled } = props;
  let mainClass = "btn";
  variant ? (mainClass += ` btn-${variant}`) : (mainClass += " btn-plain");
  if (className) mainClass += ` ${className}`;
  if (disabled) mainClass += " disabled";
  return (
    <>
      {href && (
        <Link className={mainClass} to={href}>
          <InnerBtn {...props} />
        </Link>
      )}
      {onClick && (
        <button className={mainClass} onClick={onClick} disabled={disabled}>
          <InnerBtn {...props} />
        </button>
      )}
    </>
  );
};
export default Btn;
