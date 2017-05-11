import mongoose from "mongoose";

import '../models/Note';

import config from '../../etc/config.json';

const Note = mongoose.model('Note');

export function setUpConnection(){	
	const url = 'mongodb://'+config.db.host+'/'+config.db.name;
	console.log(url);
	mongoose.connect(url);
}

export function listNotes(){
	return Note.find();
}

export function createNote(data){
	const note = new Note({
		title: data.title,
		text: data.text,
		color: data.color,
		createAt: new Date()
	});
	
	return note.save()
}

export function deleteNote(id){
	return Note.findById(id).remove();
}

