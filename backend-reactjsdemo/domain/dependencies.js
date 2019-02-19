/**
 * Queries for the API
 * 
 * @frantoqui
 */
 
class dependencies {
    
 		//Set the task as completed
    static setTasksSQL(task_id, user_token) {
        let sql = `INSERT INTO completition (id_task, date_completition, token_user) VALUES(${task_id}, NOW(), ${user_token});`;
        return sql;           
    }
		
		//Get the groups
		static getGroupsSQL(user_token) {
        let sql = `SELECT g.group_id,
										       g.title,
										       COUNT(1) total,
										  (SELECT COUNT(1)
										   FROM completition c3
										   JOIN tasks t2 ON (t2.task_id = c3.id_task)
										   WHERE c3.token_user = ${user_token}
										     AND t2.group_id = g.group_id) completed
										FROM groups g,
										     tasks t
										WHERE g.group_id = t.group_id
										GROUP BY g.group_id`;
        return sql;
    }
    
    //Get the tasks
    static getTasksSQL(group_id, user_token) {
        
        let sql = ` 
         SELECT task_id,
					       task,
					       dependents,
					       number_completed,
					       dependents - number_completed difference,
					       is_completed
					FROM   (SELECT t.task_id,
					               t.task,
					               Count(d.id_task_child)             dependents,
					               (SELECT Count(1)
					                FROM   completition c2
					                       JOIN dependences d2
					                         ON( c2.id_task = d2.id_task_child )
					                WHERE  d2.id_task_parent = t.task_id
					                       AND c2.token_user = ${user_token}) number_completed,
					               (SELECT COUNT(1)
						                FROM   completition c3
						                WHERE  c3.id_task = t.task_id
					                    AND  c3.token_user = ${user_token}) is_completed
					        FROM   tasks t
					               LEFT JOIN dependences d
					                      ON( t.task_id = d.id_task_parent )
					        WHERE  t.group_id = ${group_id}
					        GROUP  BY t.task_id) child_table`;
        return sql;
    }
 
}
 
module.exports = dependencies;