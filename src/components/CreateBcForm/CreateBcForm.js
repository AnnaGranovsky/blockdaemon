import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
  FormGroup, ControlLabel, FormControl, HelpBlock, Button, Form
} from 'react-bootstrap';


export default class BcList extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSave(e) {
    this.props.fetchAddBlockchain({name: this.state.value});
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 3) return 'success';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
        <FormGroup 
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Name is requireed </HelpBlock>
          <Button 
            type="button" 
            onClick={this.handleSave} 
            disabled={(!this.state.value || this.state.value.length < 3)}
          >
            Save
          </Button>
        </FormGroup>
    )
  }
}
