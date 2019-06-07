import React, { Component } from 'react';
import { connect } from "react-redux";

import ButtonGeneral from "./buttonGeneral.component";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

class ButtonGeneralContainer extends Component {
  render() {
    return (
      <ButtonGeneral {...this.props}></ButtonGeneral>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGeneralContainer)
