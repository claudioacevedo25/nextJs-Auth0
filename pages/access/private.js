import React, {useEffect, useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Layout from '../../components/Layout';
import utilStyles from '../../styles/utils.module.css';
import { Avatar } from '@material-ui/core';
import Link from 'next/link';

const privatePage = () => {
 const { isAutenticated, isLoading, loginWithRedirect, user} = useAuth0();
 const loginAndRedirect = async () => {
    await loginWithRedirect({ 
       redirectUri: window.location.href,
    });
 };
 useEffect(() => {
    if(!isLoading && !user ) {
       loginAndRedirect();
    }
    
 },[isLoading, user, isAutenticated])

    return (
      <Layout home>
         {!user && !isAutenticated
            ? <div>Cargando...</div> 
            :    
            <section className={utilStyles.headingMd}>
               <div style={{"display": 'flex', "alignItems": "center"}}>
                  <Avatar > 
                     <span>{user.given_name.slice(0,1)}</span>
                     <span>{user.family_name.slice(0,1)}</span>
                  </Avatar>
                  <span style={{"marginLeft": '10px'}}>{user.given_name.slice(0,4)}</span>
               </div>
            <p>{user.email}</p>
            </section>
         }
          <Link href="/">
               <a>Ir a los accesos del sitio</a>
            </Link>
    </Layout>         
    )
};

export default privatePage;