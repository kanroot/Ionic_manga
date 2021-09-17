export interface IDeserializable<T> {
    /*
    * Implementación propia de un objeto para reconstruirse mapeando los datos que vienen desde un input.
    * @param {any} objeto json o cualquier enumerable desde donde se tratará de obtener los datos.
    * @returns {T} objeto reconstruído.
    * */
    deserializar(input: any): T;
}
