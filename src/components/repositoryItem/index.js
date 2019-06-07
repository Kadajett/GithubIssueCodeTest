import React, { Component } from 'react';
import { connect } from "react-redux";

import RepositoryItem from "./repositoryItem.component";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

class RepositoryItemContainer extends Component {
  render() {
    return (
      <RepositoryItem {...this.props}></RepositoryItem>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryItemContainer)
