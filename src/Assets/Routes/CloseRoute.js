import Calender from "../Calender/Calender";
import Complete from "../Complete/Complete";
import ToDo from "../ToDo/ToDo";

export const closeRoute = [
    { path: "/toDo", Component: ToDo },
    { path: "/complete", Component: Complete },
    { path: "/calender", Component: Calender }
];
