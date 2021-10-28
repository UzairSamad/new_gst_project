import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { AppBar, ListItemAvatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Dashboard from "../Dashboard/index";
import Coefficent from "../Coefficent";
import UserGraph from "../usergraph";
import { sideNavigation } from "../sideNavItems";
import { makeStyles } from "@mui/styles";
import { color } from "@mui/system";
import Container from "@mui/material/Container";

const useStyles = makeStyles((theme) => ({
  primaryText: {
    "&.MuiListItemText-root .MuiListItemText-primary": {
      color: "#888888",
      fontSize: "13px",
    },
  },
}));

const drawerWidth = 210;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    backgroundColor: "#f3f3f4",
    overflow: "hidden",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  minHeight: "110px",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
  justifyContent: "center",
  backgroundColor: "#2F4050",
  color: "#fff",
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [component, setComponent] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  

  console.log(component, "componentcomponent");
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ background: "#f3f3f4", boxShadow: "none" }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        {/* <Toolbar style={{ minHeight: "58px" }}> */}
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2,  
               ...(open && { display: 'none' }) }}
          >
            <MenuIcon style={{color:'#2F4050'}} />
          </IconButton>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              style={{ fontSize: "13px", color: "#888888" }}
            >
              Welcome to GST.
            </Typography>
            <ListItem style={{ width: "10%" }}>
              <LogoutIcon
                style={{ fontSize: "17px", marginRight: 10, color: "#888888" }}
              />
              <ListItemText primary="Log Out" className={classes.primaryText} />
            </ListItem>
          </div>
        {/* </Toolbar> */}
      </AppBar>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#2F4050",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <p>GST</p>
        </DrawerHeader>
        <Divider />
        <List>
          {sideNavigation.map((text, index) => (
            <ListItem
              style={{ color: "#fff" }}
              onClick={(_) => setComponent(index)}
              button
              key={text.name}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        {/* <Toolbar /> */}
        {component == 0 ? (
          <Dashboard />
        ) : component == 1 ? (
          <Coefficent />
        ) : component == 2 ? (
          <UserGraph />
        ) : null}
      </Main>
    </Box>
  );
}
