interface ButtonProps {
  primary?: boolean;
  size?: "w-auto" | "w-1/2" | "w-full";
  label: string;
  href?: string;
  onClick?: () => void;
}

export const Button = ({ primary, size, label, href }: ButtonProps) => {
  const mode = primary ? "btn-primary" : "btn-secondary";
  return (
    <a href={href || "#"} className={[size, mode].join(" ")}>
      {label}
    </a>
  );
};
