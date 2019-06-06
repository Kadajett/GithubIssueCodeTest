import React, { Component } from 'react';
import { connect } from "react-redux";

import TextInput from "./textInput.component";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

class TextInputContainer extends Component {
  render() {
    return (
      <TextInput></TextInput>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInputContainer)
