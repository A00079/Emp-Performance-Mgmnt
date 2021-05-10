import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Text from "../Text";
import { COLORS } from "../../theme/mainTheme";
import Button from "../Button";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialog = ({
  isBtn,
  isFullScreen,
  isOpen,
  DialogComponent,
  setOpen,
  size,
  fullWidth,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={isFullScreen}
        open={isOpen}
        maxWidth={size}
        fullWidth={fullWidth}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {isFullScreen && (
          <AppBar style={{ backgroundColor: COLORS.primary }}>
            <Toolbar>
              <div>
                <Text size="lg">+ Add Conversions</Text>
              </div>
              <div className="absolute right-2">
                <div>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        )}
        <div className={isFullScreen ? "mt-16 px-2" : "pt-2 pb-4 px-8"}>
          {!isFullScreen && isBtn ? (
            <React.Fragment>
              <div className={!isFullScreen && "py-4"}>
                {<DialogComponent />}
              </div>
              <div className="flex justify-end space-x-6">
                <div>
                  <Button color="primary">NO</Button>
                </div>
                <div>
                  <Button color="primary">YES</Button>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <div >
              {<DialogComponent />}
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default CustomDialog;
