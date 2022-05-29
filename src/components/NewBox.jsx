import React from "react";

export default function NewBox() {
    return (
        <React.Fragment>
            <h1>New Box</h1>
            <form>
                 <input name= "nameBox" type={"text"} placeholder="Name"/>
                 <input type={"submit"} value={"CREATE"}/>
            </form>
           
        </React.Fragment>
    )
}