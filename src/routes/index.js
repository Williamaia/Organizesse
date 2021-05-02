import React, { useContext } from 'react';
import {AuthContext} from '../contexts/auth';

import AuthRouts from './auth.routes';
import AppRouts from './app.routes';

function Routes(){
    const { signed } = useContext(AuthContext);
    return(
       signed ? <AppRouts/> : <AuthRouts/>
    )
}

export default Routes;