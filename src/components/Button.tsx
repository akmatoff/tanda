import cn from "classnames";

interface Props {
  text: string;
  variant: "primary" | "secondary";
}

function Button({ text, variant = "primary" }: Props) {
  return (
    <button
      className={cn(
        "p-[10px] rounded-primary min-w-[200px] font-semibold",
        variant === "primary"
          ? "bg-primary text-white"
          : "bg-primary-light text-primary"
      )}
    >
      {text}
    </button>
  );
}

export default Button;
