import { Box, Button, Container, Typography } from "@mui/material";

const Hero2 = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="/hero2Hero2-video.mp4" type="video/mp4" />
      </Box>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(13,13,13,0.8), rgba(13,13,13,0.95))",
          zIndex: -1,
        }}
      />

      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" gutterBottom>
          We Build{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Powerful Software
          </Box>
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: "auto", mb: 4 }}
        >
          Blackhood is a modern software company delivering secure, scalable,
          and high-performance solutions.
        </Typography>

        <Button size="large" variant="contained" color="primary">
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default Hero2;
