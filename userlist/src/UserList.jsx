import React from 'react'
import {Card , ListGroup} from "react-bootstrap" ;
function UserList(data) {
    return data.map ((el) => (
        <Card 
        key ={el.id}
        style = {{
            width : "18em",
            margin : "2%" ,
            textAlign : "center",}}>
    )
        <div>
            
        </div>
    )
}

export default UserList
