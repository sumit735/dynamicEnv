const DynamicConfigs = () => {
    switch(process.env.NODE_ENV){ 
        case 'satya':
            return {
                "mongoUrl": "mongo://127.0.0.1",
                "name": 'satya'
            };

        case 'sarada':
            return {
                "mongoUrl": "mongo://127.0.0.1",
                "name": 'sarada'
            };
        case 'sumit':
            return {
                "mongoUrl": "mongo://129.0.0.1",
                "name": 'sumit'
            };

        default:
            return {
                "mongoUrl": "mongo://127.0.0.1",
                "name": 'sumit'
            };
    }
};

module.exports = {
    DynamicConfigs
}