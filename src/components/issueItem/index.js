import React, { Component } from 'react';
import { connect } from "react-redux";

import IssueItem from "./issueItem.component";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

class IssueItemContainer extends Component {
  render() {
    return (
      <IssueItem></IssueItem>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueItemContainer)
