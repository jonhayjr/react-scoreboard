import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {
   
    playerInput = React.createRef();

    handleSubmit = (e) => {
        const {addPlayer} = this.props;
        e.preventDefault();
        addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                ref={this.playerInput}
                placeholder="Enter a player's name"/>
                <input type="submit" 
                value="Add Player" />
            </form>
        );
    }
}

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func
}

export default AddPlayerForm;