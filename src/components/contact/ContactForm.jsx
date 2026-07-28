import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import PillButton from "../common/PillButton";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    bgcolor: "background.paper",
    borderRadius: 2,
    "& fieldset": { borderColor: "divider" },
    "&:hover fieldset": { borderColor: "primary.main" },
    "&.Mui-focused fieldset": { borderColor: "primary.main" },
  },
  "& .MuiInputLabel-root": { color: "text.disabled" },
  "& .MuiOutlinedInput-input, & .MuiInputBase-input": { color: "text.primary" },
};

export default function ContactForm({ onSubmit }) {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      if (onSubmit) await onSubmit(values);
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField
          label="Your Name"
          value={values.name}
          onChange={handleChange("name")}
          required
          fullWidth
          sx={fieldSx}
        />
        <TextField
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          required
          fullWidth
          sx={fieldSx}
        />
        <TextField
          label="Message"
          value={values.message}
          onChange={handleChange("message")}
          required
          fullWidth
          multiline
          rows={4}
          sx={fieldSx}
          placeholder="Tell me about the role or project."
        />
        <PillButton
          type="submit"
          variant="solid"
          endIcon={<SendIcon />}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </PillButton>

        {status === "sent" && (
          <Typography variant="body2" sx={{ color: "success.main" }}>
            Thanks — your message was sent. I'll get back to you soon.
          </Typography>
        )}
        {status === "error" && (
          <Typography variant="body2" sx={{ color: "error.main" }}>
            Something went wrong sending your message. Please try again.
          </Typography>
        )}
      </Stack>
    </Box>
  );
}
