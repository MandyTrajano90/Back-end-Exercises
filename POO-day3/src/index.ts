import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const trybeClube = new Clube();
const quadraFutebol = new QuadraFutebol();
trybeClube.adicionarQuadra(quadraFutebol);

const dataReserva = new Date('2024-05-13');

const newReserva = trybeClube
  .buscarQuadra<QuadraFutebol>(0)
  .reservar(dataReserva);

console.log(newReserva);

const quadraTenis = new QuadraTenis();
trybeClube.adicionarQuadra(quadraTenis);

const newReservaTenis = trybeClube
  .buscarQuadra<QuadraTenis>(1)
  .reservar(dataReserva);

console.log(newReservaTenis);