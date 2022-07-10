import toDo from "../../Images/check-removebg-preview.png";
const Home = () => {
  return (
    <div className="home-container">
     <div className="img_title">
     <img src={toDo} alt="" />
      <p className="todo-title">Make Your To-Do</p>
     </div>
    </div>
  );
};

export default Home;
