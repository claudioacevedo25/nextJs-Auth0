import { Auth0Provider } from '@auth0/auth0-react';

export default function App ({Component, pageProps}){
    return (
        <Auth0Provider
            domain={'dev-c7-lbrxm.us.auth0.com'}
            clientId={'ley4F16QasdlHl7e4xMAEFtETLZf2LAl'}
            redirectUri={'http://localhost:3000'}>
            <Component {...pageProps}/>
        </Auth0Provider>
    )
}