const { connection } = require('./connection')
const Course = require('./models/courses')
const Classes = require('./models/classes')
const Instructor = require('./models/instructors')
const Students = require('./models/students')


async function testCourses() {
    try {
        await connection.sync();
        // await Movie.sync({ force: true })
     let course =  await Course.findByPk(2);
     console.log(course.dataValues);
     await course.update({course_title: 'Test2?'})
     console.log(course.dataValues);
    } catch(error) {
        console.log(error);
    }
}

testCourses();