import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList";


export const ToDoListPages = () =>{
    return (
        <>
            <Header/>

            <Form/>
            
            <ToDoList/>        
        </>
    )
}