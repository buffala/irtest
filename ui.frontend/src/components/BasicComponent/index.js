//Imports
import React, { Component } from 'react';
import { MapTo } from '@adobe/cq-react-editable-components';

const BasicComponentEditConfig = {
    emptyLabel: 'Basic Component',
  
    isEmpty: function(props) {
      return !props || !props.text;
    }
};

class BasicComponent extends Component {
    render() {
      return (
        <div>
          My Text Property Value: {this.props.text},
          and checkbox: {this.props.checkbox ? 'checked' : 'unchecked'}
        </div>
      );
    }
}

export default MapTo('manulife/components/basic-component')(
    BasicComponent,
    BasicComponentEditConfig
);