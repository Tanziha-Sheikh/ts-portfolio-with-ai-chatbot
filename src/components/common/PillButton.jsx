import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

export default function PillButton({
  children,
  variant = "solid",
  startIcon,
  endIcon,
  href,
  onClick,
  download,
  target,
  rel,
  sx,
  ...rest
}) {
  const styles = {
    solid: {
      bgcolor: "primary.main",
      color: (t) => t.palette.primary.contrastText,
      "&:hover": { bgcolor: "primary.dark" },
    },
    outline: {
      bgcolor: "transparent",
      color: "text.primary",
      border: "1px solid",
      borderColor: (t) => t.tokens.borderSubtle,
      "&:hover": { borderColor: "primary.main", color: "primary.main" },
    },
    ghost: {
      bgcolor: "transparent",
      color: "text.secondary",
      "&:hover": { color: "text.primary", bgcolor: "transparent" },
    },
  };

  return (
    <MotionButton
      href={href}
      onClick={onClick}
      download={download}
      target={target}
      rel={rel}
      startIcon={startIcon}
      endIcon={endIcon}
      disableElevation
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      sx={{ ...styles[variant], ...sx }}
      {...rest}
    >
      {children}
    </MotionButton>
  );
}
