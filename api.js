var db = require('./student');
var student = require('./student');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const res = require('express/lib/response');
const req = require('express/lib/request');
var app = express();
var router = express.Router();
var port = 8083;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

router.use((request,response, next) => {
    console.info('start of router pipe line')
    next();
})

router.route('/Student').get((req,res) => {
    res.sendFile('student.html', { root: __dirname });
});
///////////////////////////Student table////////////////////////////////////
router.route('/selectStudent').get((request,response) => {
    db.getStudent(request.query.ID).then(result => {
        console.log("Student Data is Fetched successfully");
        console.dir(result);
        response.send("Record fetch successfully!");
    });
});

router.route('/insertStudent').post((req,res) => {
    req.body.IS_DELETED = 0;
    var postData  = req.body;
    db.insertStudent(postData).then(result => {
        console.log("Student Data is inserted successfully");
        res.send("Record inserted Successfully!")
    })
});

router.route('/updateStudent').put((req,res) => {
    console.log(req.body);
    db.updateStudent(req).then(result => {
        console.log("Student Data is updated successfully");
    })
});

router.route('/deleteStudent/:id').delete((req, res) => {
    db.deleteStudent(req.params.id).then(result => {
        console.log("Student Data is deleted successfully");
    })
 });


 ///////////////////////////Course table////////////////////////////////////
 router.route('/selectCourse').get((request,response) => {
    db.getCourse(request.query.ID).then(result => {
        console.log("Course Data is Fetched successfully");
        console.dir(result);
        response.send("Record fetch successfully!");
    });
});

router.route('/insertCourse').post((req,res) => {
    req.body.IS_DELETED = 0;
    var postData  = req.body;
    db.insertCourse(postData).then(result => {
        console.log("Course Data is inserted successfully");
        res.send("Record inserted Successfully!")
    })
});

router.route('/updateCourse').put((req,res) => {
    console.log(req.body);
    db.updateCourse(req).then(result => {
        console.log("Course Data is updated successfully");
        res.send("Record Updated Successfully!")
    })
});

router.route('/deleteCourse/:id').delete((req, res) => {
    db.deleteCourse(req.params.id).then(result => {
        console.log("Course Data is deleted successfully");
        res.send("Record Deleted Successfully!")
    })
 });

  ///////////////////////////Grade table////////////////////////////////////
  router.route('/selectGrade').get((request,response) => {
    console.log(request.query)
    db.getGrade(request.query.ID).then(result => {
        console.log("Grade Data is Fetched successfully");
        console.dir(result);
        response.send("Record fetch successfully!");
    });
});

router.route('/insertGrade').post((req,res) => {
    req.body.IS_DELETED = 0;
    var postData  = req.body;
    db.insertGrade(postData).then(result => {
        console.log("Grade Data is inserted successfully");
        res.send("Record inserted Successfully!")
    })
});

router.route('/updateGrade').put((req,res) => {
    console.log(req.body);
    db.updateGrade(req).then(result => {
        console.log("Grade Data is updated successfully");
    })
});

router.route('/deleteGrade/:id').delete((req, res) => {
    db.deleteGrade(req.params.id).then(result => {
        console.log("Grade Data is deleted successfully");
    })
 });


 ///////////////////////////Student Grade table////////////////////////////////////
 router.route('/selectStudentGrade').get((request,response) => {
    console.log(request.query)
    db.getStudentGrade(request.query.ID).then(result => {
        console.log("Student Grade Data is Fetched successfully");
        console.dir(result);
        response.send("Record fetch successfully!");
    });
});

router.route('/insertStudentGrade').post((req,res) => {
    req.body.IS_DELETED = 0;
    var postData  = req.body;
    db.insertStudentGrade(postData).then(result => {
        console.log("Student Grade Data is inserted successfully");
        res.send("Record inserted Successfully!")
    })
});

router.route('/updateStudentGrade').put((req,res) => {
    console.log(req.body);
    db.updateStudentGrade(req).then(result => {
        console.log("Student Grade Data is updated successfully");
    })
});

router.route('/deleteStudentGrade/:id').delete((req, res) => {
    db.deleteStudentGrade(req.params.id).then(result => {
        console.log("Student Grade Data is deleted successfully");
    })
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))