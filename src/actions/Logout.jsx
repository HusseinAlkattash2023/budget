// react-router-dom import
import { redirect } from "react-router-dom";

//helpers
import { deleteItems } from "../helpers";


export async function logoutActions(){
    //delete user
    deleteItems({
        key: "userName"
    })

    //retutn redirect
    return redirect("/")
}