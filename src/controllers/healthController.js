class HealthController {
    getHealth(req, res) {
        res.status(200).json({
            status: 'UP',
            uptime: process.uptime(),
            timestamp: new Date().toISOString()
        });
    }

    getLiveness(req, res) {
        // Liveness: the process is running and able to respond to requests.
        res.status(200).json({ status: 'UP' });
    }

    getReadiness(req, res) {
        // Readiness: the app is ready to accept traffic. There are currently
        // no external dependencies (e.g. database) to verify, so the app is
        // considered ready as soon as it can handle requests.
        const isReady = true;
        if (isReady) {
            res.status(200).json({ status: 'UP' });
        } else {
            res.status(503).json({ status: 'DOWN' });
        }
    }
}

module.exports = new HealthController();
