import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos de los cursos</h1>
        <Testimonio
          nombre="Julia"
          pais="Canada"
          cargo="Ingeniera"
          empresa="Spotify"
          imagen="julia.png"
          testimonio="He aprendido mucho del curso y estoy absolutamente seguro de que puedo aplicar todo lo aprendido en el curso para resolver problemas de usabilidad del producto."
        />

        <Testimonio
          nombre="Augusto"
          pais="Italia"
          cargo="Diseñador"
          empresa="Nike"
          imagen="augusto.jpg"
          testimonio="Las tareas estaban bien diseñadas y eran muy buenas herramientas de aprendizaje. Es una buena introducción a los temas de usabilidad y tiene la combinación adecuada de conocimientos teóricos y prácticos."
        />
        <Testimonio
          nombre="Rebeca"
          pais="Polonia"
          cargo="Productora"
          empresa="Abbey Roads Studios"
          imagen="rebeca.jpg"
          testimonio="El profesor siempre estaba ahí si lo necesitabas. ¡El estuvo genial! Estoy pensando en contratar a algunos miembros de mi personal. Con ganas de tomar otra clase."
        />
      </div>
    </div>
  );
}

export default App;
