import React, { Component } from 'react';
import { connect } from "react-redux";

import ApiKeyEntry from "./apiKeyEntry.component";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

class ApiKeyEntryContainer extends Component {
  render() {
    return (
      <ApiKeyEntry {...this.props}></ApiKeyEntry>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiKeyEntryContainer)
