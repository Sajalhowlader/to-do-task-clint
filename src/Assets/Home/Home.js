import toDo from "../../Images/check-removebg-preview.png";
const Home = () => {
  return (
    <div className="home-container">
     <div className="img_title">
     <img src={toDo} alt="" />
      <button className="todo-title">Make Your To-Do</button>
     </div>
    </div>
  );
};

export default Home;
