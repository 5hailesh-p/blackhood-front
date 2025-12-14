import { Box, Container, Grid, styled, Typography } from '@mui/material'
import SecurityIcon from "@mui/icons-material/Security";
import CodeIcon from "@mui/icons-material/Code";
import BoltIcon from "@mui/icons-material/Bolt";


const AboutCard = styled(Box)(({ theme }) => ({
    backgroundColor: "#1f1f1f",
    borderRadius: 16,
    padding: theme.spacing(4),
    textAlign: "center",
    height: "100%",
    transition: "all 0.3s ease",
    border: "1px solid #2a2a2a",

    "&:hover": {
        transform: "translateY(-6px)",
        borderColor: theme.palette.primary.main,
        boxShadow: "0 0 20px rgba(251, 192, 45, 0.25)",
    },
}));

const About = () => {
    return (
        <Box
            id="about"
            sx={{
                py: 10,
                background: "linear-gradient(180deg, #0d0d0d 0%, #151515 100%)",
            }}
        >
            <Container maxWidth="lg">
                {/* Title */}
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{ color: "primary.main", fontWeight: 700 }}
                >
                    About Blackhood
                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    maxWidth="700px"
                    mx="auto"
                    mb={8}
                >
                    Blackhood is a modern software company focused on building secure,
                    scalable, and high-performance digital solutions for businesses
                    worldwide.
                </Typography>

                {/* Core Values */}
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} textAlign="center">
                        <AboutCard>

                            <SecurityIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                                Security First
                            </Typography>
                            <Typography color="text.secondary">
                                We design software with security at its core, protecting data and
                                systems from modern threats.
                            </Typography>
                        </AboutCard>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 4 }} textAlign="center">
                        <AboutCard>

                            <CodeIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                                Clean Engineering
                            </Typography>
                            <Typography color="text.secondary">
                                Our code is scalable, maintainable, and built using modern
                                technologies and best practices.
                            </Typography>
                        </AboutCard>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 4 }} textAlign="center">
                        <AboutCard>

                            <BoltIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                                High Performance
                            </Typography>
                            <Typography color="text.secondary">
                                We deliver fast, optimized, and reliable software solutions that
                                scale with your business.
                            </Typography>
                        </AboutCard>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default About