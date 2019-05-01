/* eslint-disable linebreak-style */

/* return the latitude and longitude position of user input */

export default getCoordinates = (textInput) => {
    console.log(textInput)
    if (textInput == undefined || textInput == null || textInput.trim() == '')
        return {error: 'Tous les champs ne sont pas renseignés, Veuillez remplir tous les champs puis réessayer'}
    let url = 'https://api.opencagedata.com/geocode/v1/geojson?q=' + textInput + '&key=ee0f54e8730e40f6ba7736ca09a0d808&language=fr&limit=1'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            dataJson = JSON.parse(JSON.stringify(data))
            console.log(dataJson)
            if (dataJson['status']['code'] != 200) // an error occured
                return {error: 'Une erreur est survenue'}
            else if (dataJson['features']['length'] === 0) // means no result found
                return {error: 'Aucun résultat n\'a été trouvé, veuillez ajouter plus de précisions et vérifier que l\'adresse renseignée est valide'}
            let _latitude =  dataJson['features'][0]['geometry']['coordinates'][1]
            let _longitude = dataJson['features'][0]['geometry']['coordinates'][0]
            return {latitude: _latitude, longitude: _longitude, error: ''}        
        })
}