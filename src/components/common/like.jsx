import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'


class Like extends React.Component {
    render() { 
        let classes = "fa fa-heart";
        if(!this.props.liked) classes += "-o" ;
        return (
            <i style={{ cursor : "pointer" }} className={classes} onClick={ this.props.onClick } />
        );
    }
}
 
export default Like;