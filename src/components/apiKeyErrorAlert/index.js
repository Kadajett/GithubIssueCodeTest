import React, { Component } from 'react';
import { connect } from "react-redux";

import ApiKeyErrorAlertModal from "./apiKeyErrorAlertModal.component";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

class ApiKeyErrorAlertModalContainer extends Component {
  render() {
    return (
      <ApiKeyErrorAlertModal></ApiKeyErrorAlertModal>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiKeyErrorAlertModalContainer)
