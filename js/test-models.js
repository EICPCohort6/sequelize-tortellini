const { connection } = require('./connection')
const Course = require('./models/courses')

async function testCourses() {
    try {
        await connection.sync();
        // await Movie.sync({ force: true })
       Course.findAll()
    } catch(error) {
        console.log(error);
    }
}

testCourses();