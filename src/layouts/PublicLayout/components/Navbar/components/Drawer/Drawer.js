import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import MailIcon from "@material-ui/icons/Mail";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Avatar, CustomDropDown, DynamicListItems } from "../../components";
import HistoryIcon from "@material-ui/icons/History";
import Button from "@material-ui/core/Button";
import { Text } from "../../../../../../components";
import { connect } from "react-redux";
import { drawerState } from "../../../../../../store/actions";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    overflow: "!important hidden",
    flexShrink: 0,
    whiteSpace: "nowrap",
    overflowY: "overlay",
    "&::-webkit-scrollbar": {
      display: "none !important",
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
    },
  },
  drawerOpen: {
    width: drawerWidth,
    overflowY: "overlay",
    "&::-webkit-scrollbar": {
      display: "none !important",
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f5f5f5",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#eeeeee",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    fontWeight: "bold",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "12px",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  nested: {
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(4),
  },
}));

const MiniDrawer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [listData, setListData] = React.useState([
    {
      id: "dashboard",
      itemname: "dashboard",
      hasdropdown: false,
      isexpanded: false,
      subitemlist: [],
      route: '/',
      itemicon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>'
    },
    {
      id: "offers",
      itemname: "offers",
      hasdropdown: false,
      isexpanded: false,
      subitemlist: [],
      route: '/offers',
      itemicon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>'
    },
    {
      id: "reports",
      itemname: "reports",
      hasdropdown: false,
      isexpanded: false,
      subitemlist: [],
      route: '/reports',
      itemicon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>'
    },
    {
      id: "creditbuddy",
      itemname: "credit buddy",
      hasdropdown: true,
      isexpanded: false,
      route: false,
      subitemlist: [
        {
          'item': 'User Logs',
          'route': '/creditbuddy-user-logs'
        },
        {
          'item': 'Add Campaings',
          'route': '/creditbuddy-add-offers'
        },
      ],
      itemicon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>'
    },
    {
      id: "dcscomputerclasses",
      itemname: "DCS Classes",
      hasdropdown: true,
      isexpanded: false,
      route: false,
      subitemlist: [
        {
          'item': 'User Registration Logs',
          'route': '/dcs-user-registration-logs'
        },
        {
          'item': 'User Enquire Logs',
          'route': '/dcs-user-enquire-logs'
        },
      ],
      itemicon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>'
    },
    {
      id: "manageemployees",
      itemname: "manage employee",
      hasdropdown: true,
      isexpanded: false,
      route: false,
      subitemlist: [
        {
          'item': 'Add Employee',
          'route': '/add-employee'
        },
        {
          'item': 'View Employee',
          'route': '/view-employee'
        },
      ],
      itemicon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>'
    },
    {
      id: "manageaffiliates",
      itemname: "manage affiliates",
      hasdropdown: false,
      isexpanded: false,
      subitemlist: [],
      route: '/manage-affiliate',
      itemicon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    },
    {
      id: "manageemail",
      itemname: "manage emails",
      hasdropdown: true,
      isexpanded: false,
      route: false,
      subitemlist: [
        {
          'item': 'Compose Email',
          'route': '/compose-email'
        }
      ],
      itemicon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>'
    },
    {
      id: "managesms",
      itemname: "manage sms",
      hasdropdown: false,
      isexpanded: false,
      subitemlist: [],
      route: '/manage-sms',
      itemicon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>'
    },
    {
      id: "settings",
      itemname: "settings",
      hasdropdown: false,
      isexpanded: false,
      subitemlist: [],
      route: '/settings',
      itemicon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>'
    },
    {
      id: "logout",
      itemname: "logout",
      hasdropdown: false,
      isexpanded: false,
      subitemlist: [],
      route: '/Login',
      itemicon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>'
    },
  ]);

  React.useEffect(() => {
    getCurrentDate();
  });

  const getCurrentDate = () => {
    var today = new Date();
    var day = today.getDay();
    var daylist = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday ",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = hour >= 12 ? " PM " : " AM ";
    hour = hour >= 12 ? hour - 12 : hour;
    if (hour === 0 && prepand === " PM ") {
      if (minute === 0 && second === 0) {
        hour = 12;
        prepand = " Noon";
      } else {
        hour = 12;
        prepand = " PM";
      }
    }
    if (hour === 0 && prepand === " AM ") {
      if (minute === 0 && second === 0) {
        hour = 12;
        prepand = " Midnight";
      } else {
        hour = 12;
        prepand = " AM";
      }
    }
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const d = new Date();
    return (
      hour +
      ":" +
      minute +
      prepand +
      " at " +
      new Date().getDate() +
      "th " +
      monthNames[d.getMonth()] +
      " " +
      new Date().getFullYear()
    );
  };
  const handleDrawerOpen = () => {
    setOpen(true);
    props.drawerState(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    props.drawerState(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar
          position="fixed"
          color={"inherit"}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <div className="flex flex-row justify-between sm:space-x-8">
              {open ? (
                ""
              ) : (
                <img
                  src="/img/dashboard-logo.png"
                  className="hidden sm:block object-contain object-fit w-12 h-12 py-2 -mx-3"
                />
              )}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className="flex flex-col ml-4">
              <Typography className={classes.title} variant="h6" noWrap>
                <Text variant="infoDark" weight="700">
                  Candid Leads
                </Text>
              </Typography>
              <small
                className={clsx(
                  classes.title,
                  "text-xs font-medium text-gray-400"
                )}
              >
                {getCurrentDate()}
              </small>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            {/* <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#068F38", marginRight: "10px" }}
            >
              <div className="flex flex-row justify-between items-center space-x-1">
                <HistoryIcon className="text-white" />
                <small className="text-xs font-bold text-white capitalize">
                  View History
                </small>
              </div>
            </Button> */}
            <div className={classes.sectionDesktop}>
              <div className="border-gray-100 border-l-2 border-r-2 mt-2">
                <IconButton
                  aria-label="show 4 new mails"
                  className="border-none outline-none"
                  color="inherit"
                >
                  <Badge badgeContent={0} color="secondary">
                    <MailIcon className="text-gray-500" />
                  </Badge>
                </IconButton>
              </div>
              <div className="border-gray-100 border-r-2 px-2 mt-2">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={0} color="secondary">
                    <NotificationsIcon className="text-gray-500" />
                  </Badge>
                </IconButton>
              </div>
              <div className="flex flex-row justify-between items-center">
                <Avatar />
                <CustomDropDown />
              </div>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx("hide-vertical-scroll", {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <div className="pl-4 flex flex-row justify-between items-center">
            <img
              src="/img/dashboard-logo.png"
              className="mx-auto object-contain object-fit w-60 h-10"
            />
            <Text variant="infoDark" weight="700">
              Candid Leads
            </Text>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List className="bg-blue-50">
          <ListItem className="bg-green-50">
            {open ? (
              <div className="w-full">
                <div className="h-full flex flex-row justify-start items-center rounded-lg">
                  <Avatar />
                  <div className="flex-grow">
                    <div className="flex flex-row justify-start items-center">
                      <h2 className="text-blue-800 title-font font-bold">
                        Clerk Kent
                      </h2>
                      <img
                        src="/img/checkmark.png"
                        className="ml-1 object-contain object-cover w-4 h-4"
                      />
                    </div>
                    <p className="text-gray-600 font-medium text-xs">
                      {window.sessionStorage.getItem('useremail')}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="-mx-4 sm:-mx-2 p-0">
                <Avatar />
              </div>
            )}
          </ListItem>
        </List>
        {open ? (
          <h4 className="text-gray-600 font-bold ml-3 pt-2">Navigation</h4>
        ) : (
          ""
        )}
        <List id="drawer-item-container">
          <DynamicListItems itemsData={listData} open={open} drawerVisibleFunc={handleDrawerClose} />
        </List>
      </Drawer>
    </div>
  );
};

export default connect(null, { drawerState })(MiniDrawer);
