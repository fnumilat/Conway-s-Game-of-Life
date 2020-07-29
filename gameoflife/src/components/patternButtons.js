import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap'
import '../Main.css'


class PatternButtons extends React.Component {
    // using React-Bootstrap to style the buttons

    render() {
        return (
            <div className="patternButtonsBox">
                <h1 className = "patterns-title">Preset Patterns:</h1>
                <ButtonToolbar>
                    <Button className="pattern-buttons" onClick={this.props.blinker}>Blinker</Button>
                    <Button className="pattern-buttons" onClick={this.props.beacon}>Beacon</Button>
                    <Button className="pattern-buttons" onClick={this.props.glider}>Glider</Button>
                </ButtonToolbar>
            </div>
        )
    }
}

export default PatternButtons;
