const axios = require('axios')
const metadata_url = 'http://169.254.169.254/latest/meta-data/'


function getAllMetaDataValues(metaData){
    if(!metaData){
        return
    }
    
    let metaDataItems = metaData.split('\n');

    let result = {}

    let promises = [];

    for(let i=0; i < metaDataItems.length; i++) {
        let promise = new Promise((resolve, reject) => {
            axios
            .get(metadata_url+'/'+metaDataItems[i])
            .then(res => resolve([metaDataItems[i],res.data]))
            .catch(err => resolve([metaDataItems[i],undefined]))
        })
            
        promises.push(promise);
    }

    Promise.all(promises).then((values) => {
        for(let i=0; i < values.length; i++) {
            result[values[i][0]] = values[i][1];
        }
        console.log(result);  
        return result;  
    });
}

function queryMetaData(metaDataItem) {
    console.log(metaDataItem)
    axios
        .get(metaDataItem ? metadata_url+metaDataItem: metadata_url)
        .then(res => {
            if(metaDataItem){
                let result = {}
                result[metaDataItem] = res.data
                console.log(result)
                return result
            }else {
                getAllMetaDataValues(res.data)
            }
        })
        .catch(err => console.log('Err', err))

}

exports.queryMetaData = queryMetaData