import React, { Component } from 'react';
import { connect } from "react-redux";

import AvatarIcon from "./avatarIcon.component";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

class AvatarIconContainer extends Component {
  render() {
    return (
      <AvatarIcon></AvatarIcon>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarIconContainer)
