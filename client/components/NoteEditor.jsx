import React from 'react';
import ColorPicker from './ColorPicker.jsx';

import './NoteEditor.less'

const NotesEditor = React.createClass({
	getInitialState(){
		return {
			title: '',
			text:'',
			color: '#FFFFFF'
		};	
	},
	
	handleTextChange(event) {
		this.setState({ text: event.target.value });
	},
	
	handleTitleChange(event) {
		this.setState({ title: event.target.value });
	},
	
	handleNoteAdd() {
		const newNote = {
			title: this.state.title,
			text: this.state.text,
			color: this.state.color,
		};
				
		this.props.onNoteAdd(newNote);
		this.setState({ text: '', title: '', color: '#FFFFFF' });
	},
	handleColorChange(color) {
        this.setState({ color });
    },
	render() {
		return (
			<div className='NoteEditor'>
				<input 
					type='text'
					className='NoteEditor__title'
					placeholder='Enter title'
					value={this.state.title}
					onChange={this.handleTitleChange}
				/>
				<textarea					
					className='NoteEditor__text'
					rows={5}
					placeholder='Enter text'
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<div className='NoteEditor__footer'>
				 	<ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    />
					<button
						className='NoteEditor__button'
						disabled={!this.state.text}
						onClick={this.handleNoteAdd}
					>
						ADD
					</button>
				</div>
			</div>
		);
	}
});


export default NotesEditor;

