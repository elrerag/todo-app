export class Tarea {
    public id: number;
    public descripcion: string;

    constructor(id: number, description: string) {
        this.id = id;
        this.descripcion = description;
    }
}