import React, { Component } from 'react';
import { connect } from "react-redux";

import RepositoryList from "./repositoryList.component";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

class RepositoryListContainer extends Component {
  render() {
    return (
      <RepositoryList {...this.props}></RepositoryList>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryListContainer)
