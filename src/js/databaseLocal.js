
const saveData = (key, value) =>
{
    // const data = new DataLocalType(value);
    const dataProccessed ={
        _typeStorage:typeof value,
        _dataStorage:typeof value=="object"? JSON.stringify(value):value,
    };
    window.localStorage.setItem(key,dataProccessed._dataStorage );
    // setDoc(firestore,doc("usuarios",usuario))
    console.log(`Data saved in ${key} as '${dataProccessed._typeStorage}' : ${dataProccessed._dataStorage}`)
}

const loadData = (key, valueDefault) =>
{
    // const dataSaved = new DataLocalType(window.localStorage.getItem(key));
    const dataSaved = window.localStorage.getItem(key);
    var dataRaw 
    if (dataSaved){
        dataRaw = dataSaved._typeStorage=="object" ? JSON.parse(dataSaved._dataStorage):dataSaved._dataStorage;
    }

    return dataRaw //Devuelve el dato.
        ?? valueDefault //o el defecto
        ?? null; //o nulo
}

const deleteData = (key) =>
{
    window.localStorage.removeItem(key);
}

class DataLocalType
{
    constructor(dataRaw)
    {
        this._dataStorage;
        this._typeStorage;
        if (dataRaw)
            if (dataRaw["_typeStorage"])
            {
                this._dataStorage = dataRaw._dataStorage;
                this._typeStorage = dataRaw._typeStorage;
            } else
            {
                this._typeStorage = typeof dataRaw;
                switch (this._typeStorage)
                {
                    case "object":
                        this._dataStorage = JSON.stringify(dataRaw);
                        break;
                    case "function":
                        this._dataStorage = JSON.stringify({ idea: "bad idea" });
                        break;
                    default:
                        this._dataStorage = dataRaw;
                        break;

                }
            }
    }
    /**
     * Objecto listo para guardar en almacenamiento
     * @returns {JSON}
     */
    getData()
    {
        return { _typeStorage: this._typeStorage, _dataStorage: this._dataStorage };
    }
    getValue()
    {
        switch (this._typeStorage)
        {
            case "string":
            case "number":
            case "bigint":
            case "boolean":
            case "symbol":
            case "undefined":
            default:
                return this._dataStorage;
            case "object":
                return JSON.parse(this._dataStorage)
            case "function":
                return JSON.parse(this._dataStorage)
        }
    }
}

export default {
    saveData, loadData, deleteData
}