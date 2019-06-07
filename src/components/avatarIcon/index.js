import React, { Component } from 'react';
import { connect } from "react-redux";

import AvatarIcon from "./avatarIcon.component";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        login: state.Login
    }
}

class AvatarIconContainer extends Component {
  render() {
    return (
      <AvatarIcon {...this.props}></AvatarIcon>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarIconContainer)
