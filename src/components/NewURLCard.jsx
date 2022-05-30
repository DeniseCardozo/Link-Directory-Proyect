import React from "react";

export default function NewURLCard() {
    return (
        <React.Component>
            <form>
                <input type={"text"} placeholder={"Title"} />
                <input type={"url"} placeholder={"Insert URL"} />
                <input type={"submit"} value={"CREATE"} />
            </form>
        </React.Component>
    )
}