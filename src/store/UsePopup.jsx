import { create } from 'zustand'
import PopUp from "../components/PopUp/popUp"
const UsePopUp = create((set)=>({
component:false,
toggleComponent:function (){
    set((state)=>{{state.component = false ? PopUp : false}})
}
}))

