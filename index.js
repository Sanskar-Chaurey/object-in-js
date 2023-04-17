let lecture = 10;
let section = 3;
let title = 'jaavascript';

const course = {
    lecture: 10,
    section: 3,
    title: 'javascript',
    notes: {
        introduction: "welcome to js course"
    },
    enroll() {
        console.log('you are sucessfully enrolled');
    }
}

course.enroll()
console.log(course)

course.price = 999

// -------------------------------------------------------------------------------

// factory function 

// function createCourse() {
//     const course = {
//         lecture: 10,
//         section: 3,
//         title: 'javascript',
//         notes: {
//             introduction: "welcome to js course"
//         },
//         enroll() {
//             console.log('you are sucessfully enrolled');
//         }
//     }
//     return course;
// }

// const course = createCourse();
// course.enroll();