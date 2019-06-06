import React, { Component } from 'react';
import { connect } from "react-redux";

import IssueList from "./issueList.component";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

class IssueListContainer extends Component {
  render() {
    return (
      <IssueList></IssueList>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueListContainer)
