import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { AnimatePresence, motion } from "framer-motion";

export default function ChatWidget({
  name = "Tanzi Portfolio AI",
  subtitle = "Ask about my work",
  greeting = "Hi! Ask me anything about my skills, experience, or projects.",
  suggestions = [],
  onSendMessage,
}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: greeting }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = async (text) => {
    const clean = text.trim();
    if (!clean || loading) return;

    const next = [...messages, { role: "user", content: clean }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const reply = onSendMessage
        ? await onSendMessage(clean, next)
        : "This is a placeholder reply — connect `onSendMessage` to your AI backend (OpenAI, Gemini, etc.) to make me smart.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Sorry, something went wrong reaching the assistant." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 1300 }}>
      <AnimatePresence>
        {open && (
          <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            elevation={0}
            sx={{
              width: { xs: "88vw", sm: 380 },
              height: "min(520px, calc(100vh - 140px))",
              maxHeight: "calc(100vh - 140px)",
              mb: 2,
              bgcolor: (t) => t.tokens.bgElevated,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{ p: 2, borderBottom: "1px solid", borderColor: "divider", flexShrink: 0 }}
            >
              <Avatar sx={{ bgcolor: "primary.main", width: 36, height: 36 }}>
                <AutoAwesomeIcon sx={{ color: (t) => t.palette.primary.contrastText, fontSize: 20 }} />
              </Avatar>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle2" sx={{ color: "text.primary", fontWeight: 700 }}>
                  {name}
                </Typography>
                <Typography variant="caption" sx={{ color: "text.disabled" }}>
                  {subtitle}
                </Typography>
              </Box>
            </Stack>

            {/* Messages */}
            <Box ref={scrollRef} sx={{ flexGrow: 1, minHeight: 0, overflowY: "auto", p: 2 }}>
              <Stack spacing={1.5}>
                {messages.map((m, i) => (
                  <Box
                    key={i}
                    sx={{
                      alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                      maxWidth: "85%",
                      bgcolor: m.role === "user" ? "primary.main" : "background.paper",
                      color:
                        m.role === "user"
                          ? (t) => t.palette.primary.contrastText
                          : "text.primary",
                      px: 2,
                      py: 1.25,
                      borderRadius: 2.5,
                      fontSize: 14,
                    }}
                  >
                    {m.content}
                  </Box>
                ))}
                {loading && (
                  <Box
                    sx={{
                      alignSelf: "flex-start",
                      bgcolor: "background.paper",
                      color: "text.disabled",
                      px: 2,
                      py: 1.25,
                      borderRadius: 2.5,
                      fontSize: 14,
                    }}
                  >
                    Thinking…
                  </Box>
                )}
              </Stack>

              {messages.length === 1 && suggestions.length > 0 && (
                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
                  {suggestions.map((s) => (
                    <Chip
                      key={s}
                      label={s}
                      size="small"
                      onClick={() => send(s)}
                      sx={{
                        bgcolor: "background.paper",
                        color: "text.secondary",
                        border: "1px solid",
                        borderColor: "divider",
                        "&:hover": { borderColor: "primary.main", color: "primary.main" },
                      }}
                    />
                  ))}
                </Stack>
              )}
            </Box>

            {/* Input */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ p: 1.5, borderTop: "1px solid", borderColor: "divider", flexShrink: 0 }}
            >
              <TextField
                fullWidth
                size="small"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "background.default",
                    borderRadius: 999,
                    "& fieldset": { borderColor: "divider" },
                  },
                  "& .MuiInputBase-input": { color: "text.primary", fontSize: 14 },
                }}
              />
              <IconButton
                onClick={() => send(input)}
                sx={{
                  bgcolor: "primary.main",
                  color: (t) => t.palette.primary.contrastText,
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                <SendIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Paper>
        )}
      </AnimatePresence>

      <Fab
        onClick={() => setOpen((o) => !o)}
        sx={{
          bgcolor: "primary.main",
          color: (t) => t.palette.primary.contrastText,
          "&:hover": { bgcolor: "primary.dark" },
        }}
      >
        {open ? <CloseIcon /> : <AutoAwesomeIcon />}
      </Fab>
    </Box>
  );
}
