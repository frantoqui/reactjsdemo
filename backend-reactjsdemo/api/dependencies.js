/**
 * In this file the logic of the API is displayed, there is an additional routing which is used to
 * update the files from the Github repository automatically using webhooks
 * 
 * @frantoqui
 */

const express = require('express');
const shell_exec = require('shell_exec');
const db = require('../db/database');
const product = require('../domain/dependencies');
 
const router = express.Router();

//Get the groups list
router.post("/getgroups", async (req, res, next) => {
		let user_token = req.body.user_token;
    db.query(product.getGroupsSQL(user_token), (err, data)=> {
        if(!err) {
            res.status(200).json({
                groups:data
            });
        }
    });    
});

//Get the tasks list
router.post("/gettasks", async (req, res, next) => {
    let group_id = req.body.group_id;
    let user_token = req.body.user_token;
    db.query(product.getTasksSQL(group_id, user_token), (err, data)=> {
        if(!err) {
            res.status(200).json({
                tasks:data
            });
        }
    });    
});

//Set a task as completed
router.post("/settaskcompleted", async (req, res, next) => {
    let task_id = req.body.task_id;
    let user_token = req.body.user_token;
    db.query(product.setTasksSQL(task_id, user_token), (err, data)=> {
        if(!err) {
            res.status(200).json({
                response:data
            });
        }
    });    
});


//Update the files using the github repository
router.all("/github", async (req, res) => {

		var shell_exec = require('shell_exec').shell_exec;
		var result = await shell_exec('cd /home/ec2-user && git pull origin master --no-edit');   
		res.setHeader('Content-Type', 'application/json');
		if (result) {
  		res.send({ Answer: result });
		} else {
			res.send({ Answer: 'Something went bad' });
		}
 		
 		
});
 
module.exports = router;