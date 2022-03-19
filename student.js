const dbConnection = require('./sql_config');
const sql = require('mssql');
const res = require('express/lib/response');

////////////////////// Student Functions///////////////////////////
async function getStudent(id){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('SELECT SQL Query for Students.');
    if(id){
        result = await dbContext.request().query(`SELECT * FROM Student WHERE ID = ${id}`);
    }else{
        result = await dbContext.request().query(`SELECT * FROM Student`);
    }
    console.log('Returned SQL results for Students.');
    return result.recordsets;
}

async function insertStudent(data){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('INSERT SQL Query for Students.');
    
    result = await dbContext.request().query(`
    INSERT INTO STUDENT (NAME, FIRST_NAME, MIDDLE_NAME, LAST_NAME, DATE_OF_BIRTH, GENDER, IS_DELETED)
     VALUES ('${data.NAME}','${data.FIRST_NAME}','${data.MIDDLE_NAME}','${data.LAST_NAME}','${data.DATE_OF_BIRTH}','${data.GENDER}',${data.IS_DELETED});`);
    console.log('Record has been Inserted!');
}

async function updateStudent(req){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('UPDATE SQL Query for Students.');
    result = await dbContext.request().query(`UPDATE Student SET NAME='${req.body.NAME}',FIRST_NAME='${req.body.FIRST_NAME}',LAST_NAME='${req.body.LAST_NAME}' where ID=${req.body.ID}`);
    console.log('Record has been Updated!');
}

async function deleteStudent(id){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('DELETE SQL Query for Students.');
    result = await dbContext.request().query(`UPDATE Student SET IS_DELETED = 1 WHERE ID=${id}`);
    console.log('Returned SQL results for Students.');
}
////////////////////// Course Functions///////////////////////////
async function getCourse(id){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('SELECT SQL Query for Course.');
    if(id){
        result = await dbContext.request().query(`SELECT * FROM Course WHERE ID = ${id}`);
    }else{
        result = await dbContext.request().query(`SELECT * FROM Course`);
    }
    console.log('Returned SQL results for Course.');
    return result.recordsets;
}

async function insertCourse(data){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('INSERT SQL Query for Course.');
    
    result = await dbContext.request().query(`
    INSERT INTO Course (NAME, COURSE_NAME, MODALITY, START_DATE, IS_DELETED)
     VALUES ('${data.NAME}','${data.COURSE_NAME}','${data.MODALITY}','${data.START_DATE}','${data.IS_DELETED}');`);
    console.log('Record has been Inserted!');
}

async function updateCourse(req){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('UPDATE SQL Query for Course.');
    result = await dbContext.request().query(`UPDATE Course SET COURSE_NAME='${req.body.COURSE_NAME}',MODALITY='${req.body.MODALITY}',START_DATE='${req.body.START_DATE}' where ID=${req.body.ID}`);
    console.log('Record has been Updated!');
}

async function deleteCourse(id){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('DELETE SQL Query for Course.');
    result = await dbContext.request().query(`UPDATE Course SET IS_DELETED = 1 WHERE ID=${id}`);
    console.log('Returned SQL results for Students.');
}

////////////////////////// Grade Functions//////////////////////////
async function getGrade(id){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('SELECT SQL Query for Grades.');
    if(id){
        result = await dbContext.request().query(`SELECT * FROM Grade WHERE ID = ${id}`);
    }else{
        result = await dbContext.request().query(`SELECT * FROM Grade`);
    }
    console.log('Returned SQL results for Grades.');
    return result.recordsets;
}

async function insertGrade(data){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('INSERT SQL Query for Grades.');
    
    result = await dbContext.request().query(`
    INSERT INTO Grade (GRADER_PERCENTAGE_FROM, GRADER_PERCENTAGE_TO, GRADE_LETTER, IS_DELETED)
     VALUES ('${data.GRADER_PERCENTAGE_FROM}','${data.GRADER_PERCENTAGE_TO}','${data.GRADE_LETTER}',${data.IS_DELETED});`);
    console.log('Record has been Inserted!');
}

async function updateGrade(req){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('UPDATE SQL Query for Grades.');
    result = await dbContext.request().query(`UPDATE Grade SET GRADER_PERCENTAGE_FROM='${req.body.GRADER_PERCENTAGE_FROM}',GRADER_PERCENTAGE_TO='${req.body.GRADER_PERCENTAGE_TO}',GRADE_LETTER='${req.body.GRADE_LETTER}' where ID=${req.body.ID}`);
    console.log('Record has been Updated!');
}

async function deleteGrade(id){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('DELETE SQL Query for Grades.');
    result = await dbContext.request().query(`UPDATE Grade SET IS_DELETED = 1 WHERE ID=${id}`);
    console.log('Returned SQL results for Grades.');
}



////////////////////////// Student Grade Functions//////////////////////////
async function getStudentGrade(id){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('SELECT SQL Query for Student Grades.');
    if(id){
        result = await dbContext.request().query(`SELECT * FROM Student_Grade WHERE ID = ${id}`);
    }else{
        result = await dbContext.request().query(`SELECT * FROM Student_Grade`);
    }
    console.log('Returned SQL results for Student Grades.');
    return result.recordsets;
}

async function insertStudentGrade(data){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('INSERT SQL Query for Student Grades.');
    
    result = await dbContext.request().query(`
    INSERT INTO Student_Grade (STUDENT_ID,COURSE_ID,GRADE_LETTER_ID,IS_DELETED)
     VALUES ('${data.STUDENT_ID}','${data.COURSE_ID}','${data.GRADE_LETTER_ID}',${data.IS_DELETED});`);
    console.log('Record has been Inserted!');
}

async function updateStudentGrade(req){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('UPDATE SQL Query for Student Grades.');
    result = await dbContext.request().query(`UPDATE Student_Grade SET STUDENT_ID='${req.body.STUDENT_ID}',COURSE_ID='${req.body.COURSE_ID}',GRADE_LETTER_ID='${req.body.GRADE_LETTER_ID}' where ID=${req.body.ID}`);
    console.log('Record has been Updated!');
}

async function deleteStudentGrade(id){
    let result = null;
    console.log('Connecting to SQL...');
    let dbContext = await sql.connect(dbConnection);
    console.log('Successfully connected to SQL.');

    console.log('DELETE SQL Query for Student Grades.');
    result = await dbContext.request().query(`UPDATE Student_Grade SET IS_DELETED = 1 WHERE ID=${id}`);
    console.log('Returned SQL results for Student Grades.');
}

module.exports ={
    getStudent: getStudent,
    insertStudent: insertStudent,
    updateStudent: updateStudent,
    deleteStudent: deleteStudent,
    getCourse: getCourse,
    insertCourse: insertCourse,
    updateCourse: updateCourse,
    deleteCourse: deleteCourse,
    getGrade: getGrade,
    insertGrade: insertGrade,
    updateGrade: updateGrade,
    deleteGrade: deleteGrade,
    getStudentGrade: getStudentGrade,
    insertStudentGrade: insertStudentGrade,
    updateStudentGrade: updateStudentGrade,
    deleteStudentGrade: deleteStudentGrade,

}