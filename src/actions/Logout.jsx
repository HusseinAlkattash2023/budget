// react-router-dom import
import { redirect } from "react-router-dom";

//helpers
import { deleteItems } from "../helpers";

import {toast} from 'react-toastify';

export async function logoutActions(){
    //delete user
    deleteItems({
        key: "userName"
    })

    toast.success("You've deleted your account!")
    //retutn redirect
    return redirect("/")
}