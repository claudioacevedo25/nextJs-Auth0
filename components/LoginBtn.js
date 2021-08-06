import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button} from '@material-ui/core';

const LoginBtn = ({isDisabled}) => {
  const { loginWithRedirect, } = useAuth0();
  return <Button 
            children={'Login'}
            variant="contained" 
            color="primary"
            disabled={isDisabled}
            onClick={() => loginWithRedirect({redirectUri: 'http://localhost:3000/access/private'})}>
            
          </Button>;
};

export default LoginBtn;