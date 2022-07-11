import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";

// CommonJS

import auth from "../../firebase.init";
import googleImg from "../../Images/google3.png";
import Preloader from "./Preloader";

const LogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const googleSingIn = () => {
    signInWithGoogle();
  };
  if (loading) {
    return <Preloader />;
  }
  if (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-center",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: error.message,
    });
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
