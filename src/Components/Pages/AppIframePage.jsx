import { useContext } from "react";
import { AppContext } from "../Context/AppContext";


export const AppIframePage=()=>{

    const {url} = useContext(AppContext)
    const onLoad = ()=>{
      console.log(document.getElementById("app_iframe"));
    }

    return <iframe id="app_iframe" onLoad={onLoad}  allowFullScreen src={url} style={{position:"fixed", top:0, left:0, bottom:0, right:0, width:"100%", height:"100%", border:"none", margin:0, padding:0, overflow:"hidden"}}/>
}