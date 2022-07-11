import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import toDo from "../../Images/check-removebg-preview.png";
const Home = () => {
  const navigate = useNavigate();
  const goLogIn = () => {
    navigate("/logIn");
  };
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? (
        <div className="if-user">
          <h1>Add Task</h1>
          <div class="hero ">
            <div class="hero-content w-1/3">
              <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                  <div class="form-control">
                    <label class="label text-md font-bold">Task Name</label>
                    <input type="text" class="input input-bordered font-style" />
                  </div>
                  <div class="form-control">
                    <label class="label text-md font-bold">Task Details</label>
                    <textarea
                      type="text"
                      class="input input-bordered h-24 font-style"
                    />
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn bg-[#00c500] border-0">Add</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="home-container">
            <div className="img_title">
              <img src={toDo} alt="" />
              <button onClick={goLogIn} className="todo-title">
                Make Your To-Do
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
