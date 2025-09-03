import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import deFlag from "../../assets/flags/de.svg";
import frFlag from "../../assets/flags/fr.svg";
import enFlag from "../../assets/flags/gb.svg";
import grFlag from "../../assets/flags/gr.svg";
import itFlag from "../../assets/flags/it.svg";
import logo from "../../assets/logo.png";
import TopBar from "./TopBar";

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (lang?: string) => {
    setAnchorEl(null);
    if (lang) {
      i18n.changeLanguage(lang);
    }
  };

  const pages = [
    { name: t("header.home"), link: "/" },
    { name: t("header.accommodation"), link: "/accommodation" },
    { name: t("header.location"), link: "/location" },
    { name: t("header.reservations"), link: "/reservations" },
    { name: t("header.directions"), link: "/directions" },
    { name: t("header.contact"), link: "/contact" },
    { name: t("header.aboutUs"), link: "/about-us" },
  ];

  const languages = [
    { code: "gr", label: "GR", flag: grFlag },
    { code: "en", label: "EN", flag: enFlag },
    { code: "de", label: "DE", flag: deFlag },
    { code: "fr", label: "FR", flag: frFlag },
    { code: "it", label: "IT", flag: itFlag },
  ];

  const renderDesktopNav = (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        width: 1,
        // IMPORTANT for absolute positioning of logo
      }}
    >
      {pages.slice(0, 2).map((page) => (
        <Button
          key={page.link}
          color="inherit"
          component={RouterLink}
          to={page.link}
          sx={{ fontSize: "1.2rem" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {page.name}
        </Button>
      ))}

      {/* Logo as a floating layer */}

      <Box sx={{ width: 200, position: "relative" }}>
        <Box
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            borderRadius: "25%",
            padding: "1rem",
            boxShadow: 3,
            zIndex: 10,
            display: "flex",
          }}
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="agali-studios-logo" height={130} />
        </Box>
      </Box>

      {pages.slice(2, 4).map((page) => (
        <Button
          key={page.link}
          color="inherit"
          component={RouterLink}
          to={page.link}
          sx={{ fontSize: "1.2rem" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );

  const renderMobileNav = (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        width: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        padding: "1rem 0",
      }}
    >
      {/* Hamburger Menu (Left) */}
      <IconButton
        color="inherit"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ zIndex: 2 }}
      >
        <MenuIcon />
      </IconButton>

      {/* Centered Logo */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img src={logo} alt="agali-studios-logo" height={60} />
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="left"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: 240 },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            {t("header.myApp")}
          </Typography>
          <Divider />
          <List>
            {pages.map((page) => (
              <ListItem
                key={page.link}
                disablePadding
                onClick={() => {
                  navigate(page.link);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleDrawerToggle();
                }}
              >
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleMenuClose()}
          >
            {languages.map(({ code, label, flag }) => (
              <MenuItem
                key={code}
                onClick={() => handleMenuClose(code)}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <img
                  src={flag}
                  alt={`${label} flag`}
                  style={{ width: 20, height: 14, objectFit: "cover" }}
                />
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Drawer>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <TopBar />
      <Container maxWidth="xl">
        <Toolbar sx={{ py: 2 }}>
          {renderDesktopNav}
          {renderMobileNav}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
