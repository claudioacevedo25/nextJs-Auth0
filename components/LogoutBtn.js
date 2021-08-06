import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Button} from '@material-ui/core';

const LogoutBtn = ({isDisabled}) =>{
    const {logout} = useAuth0();

    const onLogoutClick = (event) => {
        event.preventDefault();
        try {
          return logout();
        } catch (error) {
          return (window.location.href = '/404');
        }
      };
    return  <Button 
                children='Logout'
                variant="contained" 
                color="secondary"
                disabled={isDisabled}
                onClick={onLogoutClick}>
              
            </Button>;

}

export default LogoutBtn;