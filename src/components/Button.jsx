import { Link } from "react-router-dom";
import "./Button.css";

function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  onClick,
  href,
  type = "button",
  className = "",
}) {
  const classes = `btn btn-${variant} btn-${size} ${className}`;

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon && <span className="btn-icon">{icon}</span>}
          {children}
        </a>
      );
    }

    return (
      <Link to={href} className={classes}>
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
