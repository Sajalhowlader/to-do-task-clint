import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";
import googleImg from "../../Images/google3.png";

const LogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const googleSingIn = () => {
    signInWithGoogle();
  };
  if (error) {
    toast.error(error.message);
  }
  return (
    <div className="loin_container">
      <button onClick={googleSingIn} className="flex items-center googleLog">
        <img width={45} src={googleImg} alt="" />
        Login with
      </button>
    </div>
  );
};

export default LogIn;
