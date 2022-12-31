import React, { Component } from 'react';
class Like extends Component {
    state = {  } 

    setClassName = (liked) => {        
        return liked ? "fa fa-heart" : "fa fa-heart-o";
    }

    render() { 
        return (
            <React.Fragment>
                <i style={ {cursor:'pointer'} } onClick={this.props.onLiked} className={ this.setClassName(this.props.liked)} aria-hidden="true"></i>
            </React.Fragment>
        );
    }
}
 
export default Like;