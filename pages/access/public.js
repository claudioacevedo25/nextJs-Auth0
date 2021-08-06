import Layout from '../../components/Layout';
import LoginBtn from '../../components/LoginBtn';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutBtn from '../../components/LogoutBtn';

export default function publicPage() {
    const {isAuthenticated, user} = useAuth0();

    return (
        <Layout>
             <LoginBtn isDisabled={!!user ? true : false}/>
             <LogoutBtn isDisabled={!user ? true : false}/>
        <div>
            {!!user && <span>{user.name}</span>}
        </div>
        </Layout>
    )
}