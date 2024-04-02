const express = require('express');
const router = express.Router();
const milkingSession = require('../models/milkingSession');


router.post('/', async (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Content can not be empty" });
    }
    try {
        const newMilkingSession = new milkingSession({
            sessionId: req.body.sessionId,
            date: req.body.date,
            time: req.body.time,
            cowGroup: req.body.cowGroup,
            status: req.body.status,
            specialNotes: req.body.specialNotes,
        });

        await newMilkingSession.save();
        res.status(201).json({ success: true, data: newMilkingSession });
    } catch (error) {
        console.error('Error adding milk session:', error);
        res.status(500).json({ success: false, error: 'Failed to add milk session' });
    }
});

router.get('/', async (req, res) => {
    try {
        const sessions = await milkingSession.find();
        res.status(200).json({ success: true, data: sessions });
    } catch (error) {
        console.error('Error fetching milk sessions:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch milk sessions' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedSession = await milkingSession.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSession) {
            return res.status(404).json({ success: false, error: 'Milking session not found' });
        }
        res.status(200).json({ success: true, data: updatedSession });
    } catch (error) {
        console.error('Error updating milk session:', error);
        res.status(500).json({ success: false, error: 'Failed to update milk session' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedSession = await milkingSession.findByIdAndDelete(req.params.id);
        if (!deletedSession) {
            return res.status(404).json({ success: false, error: 'Milking session not found' });
        }
        res.status(200).json({ success: true, data: deletedSession });
    } catch (error) {
        console.error('Error deleting milk session:', error);
        res.status(500).json({ success: false, error: 'Failed to delete milk session' });
    }
});

module.exports = router;