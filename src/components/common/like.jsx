import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

const Like = (props) => { 
        let classes = "fa fa-heart";
        if(!props.liked) classes += "-o" ;
        return (
            <i style={{ cursor : "pointer" }} className={classes} onClick={ props.onClick } />
        );
}
 
export default Like;