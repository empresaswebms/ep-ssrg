class Usuario {
    constructor(obj){
        this.nombre =       obj.nombre          || obj.Nombre          || null;
        this.tipoPersona =  obj.tipoPersona     || obj.TipoPersona     || null;
        this.cedula =       obj.cedula          || obj.Cedula          || null;
        this.correo =       obj.correo          || obj.Correo          || null;
        this.telefono =     obj.telefono        || obj.Telefono        || null;
        this.estado =       obj.estado          || obj.Estado          || null;
        this.ciudad =       obj.ciudad          || obj.Ciudad          || null;
        this.direccion =    obj.direccion       || obj.Direccion       || null;
        this.uid =          obj.UidFirebase     || obj.UidFirebase     || null;
        this.fecha =        obj.fecha           || obj.Fecha           || null;
        this.rif = `${this.tipoPersona}-${this.cedula}`;
    }
}

export  { Usuario}