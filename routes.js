const controller = require('./controller')

module.exports = app => {
    app.get('/', controller.homePage);
    app.get('/addthing', controller.addThingForm);
    app.post('/addthing', controller.addThingProcess);
    app.get('/justonething/:id', controller.justOne);
}