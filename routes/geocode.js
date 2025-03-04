// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

// const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search';

// router.get('/geocode', async (req, res) => {
//     const address = req.query.address;
//     if (!address) {
//         return res.status(400).json({ error: 'Address query parameter is required' });
//     }

//     try {
//         const response = await axios.get(NOMINATIM_URL, {
//             params: {
//                 q: address,
//                 format: 'json',
//                 limit: 1
//             }
//         });

//         if (!response.data || response.data.length === 0) {
//             return res.status(404).json({ error: 'Address not found' });
//         }

//         const location = response.data[0];
//         res.json({
//             address: address,
//             latitude: location.lat,
//             longitude: location.lon
//         });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch coordinates' });
//     }
// });

// module.exports = router;
