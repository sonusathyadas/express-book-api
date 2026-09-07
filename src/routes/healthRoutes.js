const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

/**
 * @swagger
 * tags:
 *   name: Health
 *   description: Application health check endpoints
 */

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Get overall application health status
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: The application is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: UP
 *                 uptime:
 *                   type: number
 *                   description: Process uptime in seconds
 *                   example: 12.345
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
router.get('/', healthController.getHealth.bind(healthController));

/**
 * @swagger
 * /health/live:
 *   get:
 *     summary: Liveness probe - checks whether the application process is running
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: The application is alive
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: UP
 */
router.get('/live', healthController.getLiveness.bind(healthController));

/**
 * @swagger
 * /health/ready:
 *   get:
 *     summary: Readiness probe - checks whether the application is ready to accept traffic
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: The application is ready
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: UP
 *       503:
 *         description: The application is not ready
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: DOWN
 */
router.get('/ready', healthController.getReadiness.bind(healthController));

module.exports = router;
