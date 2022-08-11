const { connection } = require('./connection')
const Course = require('./models/courses')
const Classes = require('./models/classes')
const Instructor = require('./models/instructors')
const Students = require('./models/students')
const { Op } = require('sequelize');



async function testQuery() {
    try {
        await connection.sync();
        // await Movie.sync({ force: true })
        //  let something = await Students.findAll({ where: { province: 'CA'}})
        //  let something = await Students.findAll({ where: { province: ['CA', 'NE']}})
        // let something = await Classes.findAll({ where: {seats: { [Op.gt]: 100}}})
        // let something = await Classes.findAll({ where: {seats: { [Op.gt]: 100, [Op.lt]: 150}}})
        // let something = await Classes.findAll({ where: {seats: { [Op.gt]: 100, [Op.lt]: 150}, }})

        /*
        let course_ids = await Course.findAll({where: { department_id: 2} })
        let ids = course_ids.map(item => item.dataValues.course_id)
        let something = await Classes.findAll({ where: {seats: { [Op.gt]: 10, [Op.lt]: 300}, course_id: ids}})
        // console.log(something)
        something.forEach(item => {
            console.log(item.dataValues)
        })
        */
    let something = await Instructor.findAll({ where:{ last_name: {[Op.like]: 'P%'}}})
    something.forEach(item => {
        console.log(item.dataValues)
    })


    } catch(error) {
        console.log(error);
    }
}

testQuery();