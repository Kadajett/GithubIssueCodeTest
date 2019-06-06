import React, { Component } from 'react';
import { connect } from "react-redux";

import Header from "./header.component";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

class HeaderContainer extends Component {
  render() {
    return (
      <Header></Header>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
