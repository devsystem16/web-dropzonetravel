import React from "react";
import "./nuestroEquipo.css";
import CardPersonal from "./CardPersonal";
const NuestroEquipo = () => {
  return (
    <div className="container-fluid" id="nuestroEquipoContainer">
      <section className="parallax">
        <div className="parallax-inner">
          <h1 style={{ color: "white", fontWeight: "bold" }}>
            VEN Y CONOCE A NUESTRO EQUIPO.
          </h1>
        </div>
      </section>
      <section>
        <div></div>
      </section>
      <br />
      <br />

      <CardPersonal
        nombre="Jairo Serrano "
        profesion="Gerente General"
        foto="https://zonetravel.s3.us-east-2.amazonaws.com/jairo.jpg"
        descripcion="Nací en la Ciudad de Riobamba el 24 de diciembre 1987. A la edad de 7
        años me traslade a la ciudad de Quito y allí recibí mi formación
        académica, estudie en la Universidad Central del Ecuador donde obtuve
        mi Título en Licenciatura en Turismo Ecológico, elegí mi carrera
        porque me apasiona la naturaleza, la historia y la cultura, y es el
        medio adecuado para dar a conocer las riqueza natural y cultura de
        nuestro país a nuestros coterráneos y el resto del mundo."
        frase="La pasión por la naturaleza, la historia y la cultura es la
        fuerza que me impulsa a dar a conocer las riquezas de nuestro país
        al mundo, a través del turismo ecológico."
      ></CardPersonal>

      <hr className="LineaSeparacion"></hr>

      <CardPersonal
        nombre="Cristian Merizalde"
        profesion="Producción Audiovisual"
        foto="https://zonetravel.s3.us-east-2.amazonaws.com/Cristian.jpg"
        descripcion="Nací en la cuidad de Guayaquil, el 16 de agosto de 1990. Soy Productor
        de Audiovisuales, editor, narrador, fotógrafo y operador de drone,
        desde temprana edad me sentí atraído por la flora y la fauna, sentía
        mucho interés por los documentales y libros de fotografía de aves,
        tiempo después halle mi inspiración con el trabajo espectacular de
        Christian Norris y su programa Rodando Ecuador, donde nació mi interés
        por viajar y documentar mis vivencias y por supuesto, la pasión por
        los drones, seguí instrucción de fotografía y pilotaje de drone, para
        alcanzar la certificación de Operador de Drones, a continuación me
        dedique a viajar y cree el proyecto “Ecuador en lo Alto”, una cámara y
        un drone han sido para mí más que solo equipos, han sido el medio para
        vivir experiencias maravillosas, viaja, vive, visita; viaja, vive
        comparte, Ecuador en lo Alto."
        frase="Podemos encontrar la inspiración en nuestras pasiones y crear
        algo significativo a través de ellas, tal como lo hizo el creador de
        'Ecuador en lo Alto', quien encontró su pasión por la naturaleza y
        la documentación a través de la fotografía y el uso de drones."
      ></CardPersonal>

      {/* fin   */}
      <hr className="LineaSeparacion"></hr>
      <CardPersonal
        nombre="Marcelo Arguello"
        profesion="Transporte (Sur - Costa)"
        foto="https://zonetravel.s3.us-east-2.amazonaws.com/Marcelo-copia-1.jpg"
        descripcion="Nací en la Ciudad de Riobamba el 15 de diciembre 1987. Soy Conductor
        Profesional, poseo la licencia de conducir tipo D, me identifico por
        ser quién transporta a usuarios nacionales e internacionales brindando
        un servicio de calidad, puntualidad, atención al cliente, cuidado del
        medio ambiente, reflejada en la responsabilidad y profesionalismo que
        me caracteriza en mi unidad de servicio equipada para la seguridad y
        comodidad de nuestros usuarios, mi profesión la realizo desde los 16
        años de edad, a través de una capacitación constante y mejora continua
        a fin de lograr el, prestigio y satisfacción plena de los turistas que
        viajan bajo mi servicio."
        frase="La clave del éxito profesional es la dedicación y la mejora
        continua, y esto se demuestra en el conductor de Riobamba, quien
        ofrece un servicio de alta calidad, puntual, con atención al cliente
        y cuidado del medio ambiente."
      ></CardPersonal>
      <hr className="LineaSeparacion"></hr>
      <CardPersonal
        nombre="Cesar Tufiño"
        profesion="Transporte (Centro - Norte)"
        foto="https://zonetravel.s3.us-east-2.amazonaws.com/Cesar+Tufi%C3%B1o.jpg"
        descripcion="Nací en la ciudad de Quito el 28 de abril de 1981.

        Soy Conductor Profesional, poseo la licencia de conducir tipo D, estudie en la Academia Militar Borja 3. Mi sueño era ser Oficial de la FAE por motivo de un accidente se me complicó mis estudios, a más de gustarme la vida militar me gustaba los buses ya que mi padre era transportista tenían un bus el cual me enseñó a conducir desde los 13 años de edad, mi padre lleva 30 años prestando servicio de transporte de Turismo con usuarios nacionales e internacionales y yo llevo 14 años conduciendo y recorriendo mi lindo y maravilloso Ecuador, amo mi País."
        frase="El amor por nuestro país nos inspira a seguir adelante en nuestra labor, así como el conductor profesional de Quito, cuyo amor por los buses y la conducción lo ha llevado a recorrer y conocer cada rincón del maravilloso Ecuador, brindando un servicio de alta calidad y dejando en alto su pasión por su país"
      ></CardPersonal>
      <hr class="hr-text" data-content="NUESTRAS GUIAS"></hr>

      <CardPersonal
        nombre="Mariuxi Calderón"
        profesion="Guia"
        foto="https://zonetravel.s3.us-east-2.amazonaws.com/Personal-guia/Mariuxi+Calder%C3%B3n.jpg"
        descripcion="Nací en la Ciudad de Quito, el 13 de Mayo de 1994.
        Soy Ing. Ecoturismo de la Pontificia Universidad Católica del Ecuador, Guía de Turismo Nacional, formada con principios éticos y valores, creativa y con alta capacidad de adaptación al trabajo individual y en equipo, habilidad de liderazgo; desarrollando y Motivando al equipo para que se cumplan los objetivos planteados, capacidad de análisis y solución de problemas. Tengo experiencia Laboral en agencias de viajes como Turavex Tour Operation, Quinde Tour S.A., Ciudad Mitad del Mundo, entre otras. Las mismas que me han brindado la posibilidad de conocer diferentes formas de trabajar en el Turismo Ecuatoriano. Me gusta emprender en sitios no muy explotados turísticamente pero de la misma manera trabajar con la comunidad."
        frase="Soy una líder comprometida en transformar la industria turística ecuatoriana hacia una que sea sostenible, responsable e inclusiva, trabajando con comunidades y emprendiendo en nuevos lugares. Mi visión es motivar a mi equipo hacia el éxito y contribuir positivamente al desarrollo local"
      ></CardPersonal>
      <hr className="LineaSeparacion"></hr>
      <CardPersonal
        nombre="María José Herrera"
        profesion="Guia"
        foto="https://zonetravel.s3.us-east-2.amazonaws.com/Personal-guia/Mar%C3%ADa+Jos%C3%A9+Herrera.jpg"
        descripcion="Nací en la ciudad de Quito el 04 de abril de 1994.
        Obtuve mi título como Ingeniera en Ecoturismo y Guía de Turismo Nacional en la PUCE. Aproximadamente trabajo cinco años en el área de turismo. Escogí esta profesión porque amo mucho mi país, su historia, cultura, paisajes y biodiversidad. Así mismo me gusta compartir con personas y dar a conocer todas las maravillas que tenemos en nuestro lindo Ecuador.
        Estaré muy feliz de poder compartir con usted en su siguiente tour."
        frase="Guía de turismo apasionada por compartir las maravillas de mi país con viajeros, comprometida en mostrar la historia, cultura, paisajes y biodiversidad de Ecuador. Estoy emocionada de unirme a su próxima aventura para juntos descubrir su belleza y riqueza"
      ></CardPersonal>

      <hr className="LineaSeparacion"></hr>
      <CardPersonal
        nombre="Carolina Torres"
        profesion="Guia"
        foto="https://zonetravel.s3.us-east-2.amazonaws.com/Personal-guia/Carolina+Torres.jpg"
        descripcion="Naci en la ciudad de Quito, en 1994.
        Desde muy joven aprendí sobre arte, literatura, cultura y naturaleza.
        Mi formación académica la realizé en la Pontificia Universidad Católica de Quito y obtuve el título en Ecoturismo y Guía nacional de turismo.
        He trabajado con turistas nacionales e internacionales, enfocándome en realizar un turismo consciente y responsable con el medio ambiente y el desarrollo social de las comunidades y emprendimientos. Además, incursiono en la educación ambiental y la ilustración naturalista."
        frase="Soy una guía de turismo apasionada por la cultura, la naturaleza y el arte, comprometida en realizar un turismo consciente y responsable con el medio ambiente y el desarrollo social de las comunidades."
      ></CardPersonal>
      <hr className="LineaSeparacion"></hr>
      <CardPersonal
        nombre="Rodney Mantilla"
        profesion="Guia"
        foto="https://zonetravel.s3.us-east-2.amazonaws.com/Personal-guia/Rodney+Mantilla.jpg"
        descripcion="Nací en la ciudad de Quito el 14 de abril de 1997.
        Soy Ingeniero en Ecoturismo y guía de turismo nacional carrera que estudié en la Pontificia Universidad Católica del Ecuador, desde pequeño siempre me encanto la naturaleza tenía la costumbre de ver los programas ambientales de Discovery Channel en especial con los programas de Steve Irwin, apodado como el cazador de cocodrilos y es así que nació mi gusto por la naturaleza. Por otra parte, considero que nuestro país tiene todo para ser una potencia turística de una manera sostenible dando a conocer a turistas extranjeros y nacionales la importancia que tiene el cuidado del medio ambiente a su vez indicar la riqueza cultural y la biodiversidad de todo nuestro país. Somos un país pequeño pero con mucha biodiversidad!"
        frase="Guía de turismo y amante de la naturaleza, apasionado por la vida salvaje y la cultura de mi país, Ecuador. Comprometido en fomentar un turismo sostenible y responsable, promoviendo la conservación del medio ambiente y la biodiversidad. Me enorgullece compartir mi conocimiento y amor por mi país con turistas nacionales e internacionales, y espero inspirar a otros a unirse en la preservación de nuestro hermoso país"
      ></CardPersonal>
      <hr className="LineaSeparacion"></hr>
      <CardPersonal
        nombre="Jenny Quispilema"
        profesion="Guia"
        foto="https://zonetravel.s3.us-east-2.amazonaws.com/Personal-guia/Jenny+Quispilema.jpg"
        descripcion="Naci en la ciudad de Ambato, el 14 de abril de 1997.
        Estudie en la Universidad Universidad Estatal Amazónica Ingeniera en Turismo,  en nuestro país tenemos una variedad de atractivos naturales, como culturales por descubrir se interactúa con las personas en cualquier área de trabajo que se relacione con el turismo y es por ello que debemos estar capacitadas para estudiar el comportamiento de los turistas en el momento y tener la herramientas de solucionar cualquier tipo de problema que se nos presente."
        frase="Guía de turismo apasionado por la diversidad cultural y natural de mi país, Ecuador. Comprometido en brindar un servicio de alta calidad y solucionar cualquier problema que se presente durante la aventura turística. Ofrezco experiencias únicas e inolvidables para los turistas, mostrando la belleza y riqueza de nuestro país. Unidos, descubramos juntos todos los atractivos de Ecuador"
      ></CardPersonal>
    </div>
  );
};

export default NuestroEquipo;
