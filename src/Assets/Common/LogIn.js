import googleImg from "../../Images/google3.png";

const LogIn = () => {
  return (
    <div className="loin_container">
      <button className="flex items-center googleLog">
        <img width={40} src={googleImg} alt="" />
        Login with
      </button>
    </div>
  );
};

export default LogIn;
