import {
  createContext,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  useContext,
} from "react";
import { cn } from "./utils";

type NavigationContextValue = {
  path: string;
  navigate: (to: string) => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: NavigationContextValue;
}) {
  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
}

export function useNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigation must be used inside NavigationProvider");
  }

  return context;
}

export function AppLink({
  to,
  className,
  activeClassName,
  onClick,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  activeClassName?: string;
}) {
  const { path, navigate } = useNavigation();
  const isActive = path === to;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    navigate(to);
  }

  return (
    <a
      href={to}
      aria-current={isActive ? "page" : undefined}
      className={cn(className, isActive && activeClassName)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
