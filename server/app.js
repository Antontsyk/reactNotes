import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { serverPort } from '../etc/config.json';

import * as db from './utils/databaseUtils.js';

db.setUpConnection();

const app = express();

app.use( bodyParser.json() );

app.use( cors({ origin: '*' }) );

app.get('/notes', (req,res) =>{
	db.listNotes().then(data => res.send(data) );
});

app.post('/notes', (req,res) =>{
	db.createNote(req.body).then(data => res.send(data) );
});

app.delete('/notes/:id', (req,res) =>{
	db.deleteNote(req.params.id).then(data => res.send(data) );
});

const server = app.listen(serverPort, () => {
	console.log('Run serner on port '+ serverPort );
});