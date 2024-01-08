import React, { memo } from "react";
import { log } from "../../log";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// the component accepts onClick inside ...props, so the oClick must be wrapped by useCallback in parent component to avoid rereenders while using memo() on this component
const IconButton = memo(function IconButton({
  children,
  icon,
  ...props
}: IconButtonProps) {
  log("<IconButton /> rendered", 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

export default IconButton;
