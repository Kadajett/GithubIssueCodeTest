import React, { Component } from 'react';
import { connect } from "react-redux";

import RepositoryList from "./repositoryList.component";

import {setSelectedRepository} from "../../redux/actions/ActionCreators"

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      setSelectedRepo: (repo) => {
        dispatch(setSelectedRepository(repo));
      },
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop,
    };
}

class RepositoryListContainer extends Component {
  render() {
    return (
      <RepositoryList {...this.props}></RepositoryList>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryListContainer)
