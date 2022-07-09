import type { NextPage } from 'next'
import styles from '../styles/home.module.scss';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const Home: NextPage = () => {

  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
  }
  return (
   <>
   <div className={styles.container}>

   <GoogleLogin
    clientId='sua client id google'
    buttonText="Login with google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    theme= 'dark'
  />

   </div>
   </>
  )
}

export default Home
