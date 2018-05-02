import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const InfoDialog = ({infoText, isOpen, onClose}) => {

    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onClick={onClose}
      />,
    ];

    const customContentStyle = {
      width: '30%',
      maxWidth: '500px',
    };

    return <div>
            <MuiThemeProvider>
              <Dialog
                title="Calendar Event Change"
                actions={actions}
                contentStyle={customContentStyle}
                modal={false}
                open={isOpen}
                onRequestClose={onClose}
              >
                {infoText}
              </Dialog>
            </MuiThemeProvider>
          </div>
}

export default InfoDialog;
