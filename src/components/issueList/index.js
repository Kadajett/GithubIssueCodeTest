import React, { Component } from 'react';
import { connect } from "react-redux";

import IssueList from "./issueList.component";
import {setIssueOrder} from "../../redux/actions/ActionCreators";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       setIssueOrder: (orderBy) => {
        dispatch(setIssueOrder(orderBy));
       }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        order: state.Issue.order
    }
}

class IssueListContainer extends Component {
  render() {
    return (
      <IssueList {...this.props}></IssueList>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueListContainer)
