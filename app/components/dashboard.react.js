var React = require('react');
var Alert = require('react-bootstrap').Alert;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Button = require('react-bootstrap').Button;
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;
var SplitButton = require('react-bootstrap').SplitButton;
var Panel = require('react-bootstrap').Panel;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;
var PanelGroup = require('react-bootstrap').PanelGroup;
var ModalTrigger = require('react-bootstrap').ModalTrigger;
var Modal = require('react-bootstrap').Modal;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Tooltip = require('react-bootstrap').Tooltip;
var Popover = require('react-bootstrap').Popover;
var ProgressBar = require('react-bootstrap').ProgressBar;
var TabbedArea = require('react-bootstrap').TabbedArea;
var TabPane = require('react-bootstrap').TabPane;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Label = require('react-bootstrap').Label;
var Badge = require('react-bootstrap').Badge;

var MyModal = React.createClass({
  render:function() {
    return (
      <Modal {...this.props} bsStyle='primary' title='Modal heading' animation={false}>
        <div className='modal-body'>
        	111
        </div>
        <div className='modal-footer'>
          <Button onClick={this.props.onRequestHide}>Close</Button>
        </div>
      </Modal>
    );
  }
});

var dashboard = React.createClass({
	getInitialState: function() {
		return {
			activeKey: "1",
			key: 1
		};
	},
	render: function() {
		return (
			<div>
				<div className="toolbar">
					
				</div>
				<div className="dashboard-work">
					<h2>alert</h2>
					<Alert bsStyle='warning'>warning</Alert>
					<Alert bsStyle='success'>success</Alert>
					<Alert bsStyle='info'>info</Alert>
					<Alert bsStyle='danger'>danger</Alert>

					<h2>Button</h2>
					<ButtonToolbar>
					    {/* Standard button */}
					    <Button onClick={this.btnClick}>Default</Button>

					    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
					    <Button bsStyle='primary'>Primary</Button>

					    {/* Indicates a successful or positive action */}
					    <Button bsStyle='success'>Success</Button>

					    {/* Contextual button for informational alert messages */}
					    <Button bsStyle='info'>Info</Button>

					    {/* Indicates caution should be taken with this action */}
					    <Button bsStyle='warning'>Warning</Button>

					    {/* Indicates a dangerous or potentially negative action */}
					    <Button bsStyle='danger'>Danger</Button>

					    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
					    <Button bsStyle='link'>Link</Button>
					    <Button bsStyle='primary' bsSize="large">Primary</Button>
					    <Button bsStyle='primary' bsSize="small">Primary</Button>
					    <Button bsStyle='primary' bsSize="small" disabled>Primary</Button>
					    <Button href="#/dashboard">Link</Button>
					</ButtonToolbar>

					<h2>ButtonGroup</h2>
					<ButtonToolbar>
						<ButtonGroup bsSize="small">
						    <Button>Left</Button>
						    <Button>Middle</Button>
						    <Button>Right</Button>
					    </ButtonGroup>
					    <ButtonGroup bsSize="large">
						    <Button>Left</Button>
						    <Button>Middle</Button>
						    <Button>Right</Button>
					    </ButtonGroup>
					    <ButtonGroup>
						    <Button>Left</Button>
						    <Button>Middle</Button>
						    <Button>Right</Button>
					    </ButtonGroup>
				    </ButtonToolbar>

				    <h2>Dropdown</h2>
				    <DropdownButton title='Dropdown' onSelect={this._menuSelect} >
				        <MenuItem eventKey='1'>Dropdown link</MenuItem>
				        <MenuItem eventKey='2'>Dropdown link</MenuItem>
				    </DropdownButton>

				    <h2>dropup</h2>
				    <DropdownButton title='Dropdown' onSelect={this._menuSelect} dropup>
				        <MenuItem eventKey='1'>Dropdown link</MenuItem>
				        <MenuItem eventKey='2'>Dropdown link</MenuItem>
				    </DropdownButton>

					<h2>SplitButton</h2>
				    <SplitButton title='Dropdown right' pullRight>
					    <MenuItem eventKey='1'>Action</MenuItem>
					    <MenuItem eventKey='2'>Another action</MenuItem>
					    <MenuItem eventKey='3'>Something else here</MenuItem>
					    <MenuItem divider />
					    <MenuItem eventKey='4'>Separated link</MenuItem>
				  	</SplitButton>

				  	<h2>Panel</h2>
				  	<Panel header="this is the header">
					    Basic panel example<Button onClick={this.btnClick}>Default</Button>
				  	</Panel>
				  	<Panel header="this is the header" bsStyle="primary">
					    Basic panel example
				  	</Panel>
				  	<Panel collapsable defaultExpanded header='Panel heading'>
					    <ListGroup fill>
					      	<ListGroupItem>Item 1</ListGroupItem>
					      	<ListGroupItem>Item 2</ListGroupItem>
					      	<ListGroupItem>&hellip;</ListGroupItem>
					    </ListGroup>
				  	</Panel>

				  	<PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
				        <Panel header='Panel 1' eventKey='1'>
							<ListGroup fill>
						      	<ListGroupItem>Item 1</ListGroupItem>
						      	<ListGroupItem>Item 2</ListGroupItem>
						      	<ListGroupItem>&hellip;</ListGroupItem>
					    	</ListGroup>
				        </Panel>
				        <Panel header='Panel 2' eventKey='2'>
			        		<ListGroup fill>
						      	<ListGroupItem>Item 1</ListGroupItem>
						      	<ListGroupItem>Item 2</ListGroupItem>
						      	<ListGroupItem>&hellip;</ListGroupItem>
					    	</ListGroup>
				        </Panel>
			      	</PanelGroup>

			      	<h2>modal</h2>
			      	<ModalTrigger modal={<MyModal />}>
					    <Button bsStyle='primary' bsSize='large'>Launch demo modal</Button>
				  	</ModalTrigger>

					<h2>Tooltip</h2>
				  	<ButtonToolbar>
					    <OverlayTrigger placement='left' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
					      <Button bsStyle='default'>Holy guacamole!</Button>
					    </OverlayTrigger>
					    <OverlayTrigger placement='top' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
					      <Button bsStyle='default'>Holy guacamole!</Button>
					    </OverlayTrigger>
					    <OverlayTrigger placement='bottom' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
					      <Button bsStyle='default'>Holy guacamole!</Button>
					    </OverlayTrigger>
					    <OverlayTrigger placement='right' overlay={<Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>}>
					      <Button bsStyle='default'>Holy guacamole!</Button>
					    </OverlayTrigger>
				  	</ButtonToolbar>


					<h2>Popover</h2>
				  	<ButtonToolbar>
					    <OverlayTrigger trigger='click' placement='left' overlay={<Popover title='Popover left'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
					      <Button bsStyle='default'>Holy guacamole!</Button>
					    </OverlayTrigger>
					    <OverlayTrigger trigger='click' placement='top' overlay={<Popover title='Popover top'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
					      <Button bsStyle='default'>Holy guacamole!</Button>
					    </OverlayTrigger>
					    <OverlayTrigger trigger='click' placement='bottom' overlay={<Popover title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
					      <Button bsStyle='default'>Holy guacamole!</Button>
					    </OverlayTrigger>
					    <OverlayTrigger trigger='click' placement='right' overlay={<Popover title='Popover right'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
					      <Button bsStyle='default'>Holy guacamole!</Button>
					    </OverlayTrigger>
				  	</ButtonToolbar>

					
				  	<h2>TabbedArea</h2>
				  	<TabbedArea activeKey={this.state.key} onSelect={this.handleTab} animation={false}>
				        <TabPane eventKey={1} tab='Tab 1'>TabPane 1 content</TabPane>
				        <TabPane eventKey={2} tab='Tab 2'>TabPane 2 content</TabPane>
			      	</TabbedArea>

					<h2>ProgressBar</h2>
				  	<ProgressBar now={60}  active label='%(percent)s%'/>

					<h2>Label</h2>
					<div>
					    <Label bsStyle='default'>Default</Label>&nbsp;
					    <Label bsStyle='primary'>Primary</Label>&nbsp;
					    <Label bsStyle='success'>Success</Label>&nbsp;
					    <Label bsStyle='info'>Info</Label>&nbsp;
					    <Label bsStyle='warning'>Warning</Label>&nbsp;
					    <Label bsStyle='danger'>Danger</Label>
				    </div>

					<h2>Badges</h2>
				    <p>Badges <Badge>42</Badge></p>

				</div>
			</div> 
		);
	},
	btnClick:function(){
		alert(1)
	},
	_menuClick:function(e){
		e.preventDefault();
		alert(2)
	},
	_menuSelect:function(e){
		console.log(e)
	},
	handleSelect:function(activeKey){
		this.setState({ activeKey:activeKey });
	},
	handleTab:function(key){
		this.setState({key:key});
	}

});

module.exports = dashboard;