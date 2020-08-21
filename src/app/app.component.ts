import { Component } from '@angular/core';


// import Tarea from './tarea.model'; // export default obligatorio en la entidad
import { Tarea } from './tarea.model'; // sin el default, funciona

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id:number = 0;
  public tareas:Tarea[] = [];

  public agregaTarea(event){
    const formulario = event.target.parentElement;
    const [descripcion] = formulario;
    const datos = {
      id: this.id + 1,
      descripcion: descripcion.value
    }
    this.tareas.push(datos);
    this.id ++;
    formulario.reset()
  }

  public listarTodos():Tarea[] {
    return this.tareas;
  }

  /**
   * Pudo ser directamente pasado el id
   * pero este es otro approach
   */
  public eliminaElemento(event) {
    const cajaAlerta = event.target.parentNode.parentNode;
    const id = cajaAlerta.id.replace("id_", "");
    // se filtra para no incluir el objeto con ese id
    // en sus atributos.
    this.tareas = this.tareas.filter( x => x.id != id)

  }
}

