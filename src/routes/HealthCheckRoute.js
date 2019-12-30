const HealthCheckController = require('../controllers/HealthCheckController');

module.exports = (app) => {
    app.route('/health/check')
        .get(HealthCheckController)
};