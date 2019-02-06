class Dependencies {
    
    constructor(name,price) {
        this.task_id=0;
        this.task_group=group;
        this.task_description=task;
        this.task_dependencies=dependencies;
        this.task_completed=completed;
    }
 
    static AddCompletitionSQL() {
        let sql = `INSERT INTO PRODUCTS(prd_name, prd_price) \
                   VALUES('${this.prd_name}',${this.prd_price})`;
        return sql;           
    }
 
    static getDependenciesSQL() {
        let sql = `SELECT * FROM tasks`;
        return sql;           
    }
 
    static deleteCompletitionByIdSQL(prd_id) {
        let sql = `DELETE FROM PRODUCTS WHERE PRD_ID = ${prd_id}`;
        return sql;           
    }
 
}
 
export default Dependencies;