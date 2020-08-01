import React from 'react';
import { ButtonToolbar, Dropdown, DropdownButton, Button } from 'react-bootstrap'
import '../Main.css'


class Buttons extends React.Component {
    // using React-Bootstrap to style the buttons

    // call the gridSize event from the Main.js
    handleSelect = (evt) => {
        this.props.gridSize(evt);
    }

    render() {
        return (
            // Sizes of the grid:
            // Small = 20x10
            // Original = 50x30
            // Large = 70x50
            <div className="buttonsBox">
                <ButtonToolbar>
                    <Button className="buttons" onClick={this.props.playButton}>Play</Button>
                    <Button className="buttons" onClick={this.props.pauseButton}>Pause</Button>
                    <Button className="buttons" onClick={this.props.clear}>Clear</Button>
                    <Button className="buttons" onClick={this.props.slow}>Slow</Button>
                    <Button className="buttons" onClick={this.props.fast}>Fast</Button>
                    <Button className="buttons" onClick={this.props.random}>Random</Button>
                    {/* <Button className="buttons" onClick={this.props.nextGen}>Next Generation</Button> */}
                    <DropdownButton className="buttons" title="Grid Size" id="dropdown-basic-button" onSelect={this.handleSelect}>
                        <Dropdown.Item eventKey="1">Small</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Original</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Extra Large</Dropdown.Item>
                    </DropdownButton>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Buttons;
