const axios = require('axios');

function googleApi(req, res) {
    const originLatitudeTest = '47.766232';
    const originLongitudeTest = '29.010657';
    const destinationLatitudeTest = '46.840618';
    const destinationLongitudetest = '29.626813'; 

    const originLatitude = req.body.origlatitude;
    const originLongitude = req.body.origlongitude;
    const destinationLatitude = req.body.destlatitude;
    const destinationLongitude = req.body.destlongitude;

    const apiKey='AIzaSyBL16lmDaSBwiVUqAwDgJiqYSnIF4HbVpA';
    const apiUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json';

    let googleData = {}; 

    axios.get(apiUrl,{
            params: {
                units: 'metric',
                language: 'ru',
                origins: `${originLatitude},${originLongitude}`,
                destinations: `${destinationLatitude},${destinationLongitude}`,
                key: apiKey 
            }
        })
        .then(function ({data}) {
            const duration = data.rows[0].elements[0].duration.text;
            const distance = data.rows[0].elements[0].distance.text;

            // console.log('Данные получены: ', data);
            console.log('Длительность пути: ', duration);
            console.log('Дальность пути: ', distance);

            googleData = data.rows[0].elements[0];

            res.render('google', {
                googleData
            });
        })
        .catch(function (error) {
            console.log(error);
        });
};

function googleApiIndex(req, res) {
    res.render('google');
}

module.exports = {
    googleApiIndex,
    googleApi
};