import {
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <>
      <br></br>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2, sm: 2 },
          py: { xs: 2, sm: 2 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="#">
            Privacy Policy
          </Link>
          <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Terms of Service
          </Link>
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: "left", color: "text.secondary" }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://x.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
