export class persona{
    //le decimo que no es necesario pedirlo
    //porque se genera automaticamente
    id?:number;
    //para declrar los atributos de la clase decirles que no solo recivan el tipo de dato
    //que es necesario
    nombre: String ;
    apellido: String;
    img: String;

    constructor(nombre:String,apellido:String,img:String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;
    }

}