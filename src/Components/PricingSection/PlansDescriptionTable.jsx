import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import checkImg from '../../assets/cheque.png'

function createData(module, free, basic, mediana, macro, enterprise) {
  return { module, free, basic, mediana, macro, enterprise };
}

const rows = [
  createData('Pagos', <img src={checkImg}/>,<img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>),
  createData('Novedades de empleados', <img src={checkImg}/>,<img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>),
  createData('Generación Documentos Oficiales', <img src={checkImg}/>,<img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>),
  createData('Manejo de Horas', <img src={checkImg}/>,<img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>),
  createData('Manejo de Turnos', <img src={checkImg}/>,<img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>),
  createData('Integración con ponchador',<img src={checkImg}/>,<img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>),
  createData('Manejo de prestaciones', <img src={checkImg}/>,<img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>),
  createData('Acción Personal', <img src={checkImg}/>,<img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>),
  createData('Registros de Permisos',<img src={checkImg}/>,<img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>),
  createData('Cartas', <img src={checkImg}/>,<img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>),
  createData('Auditorias', <img src={checkImg}/>,<img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>, <img src={checkImg}/>),
];

export const PlansDescriptionTable = ()=> {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right"><span>Gratis</span></TableCell>
            <TableCell align="right"><span>Básico</span></TableCell>
            <TableCell align="right"><span>Mediana</span></TableCell>
            <TableCell align="right"><span>Macro</span></TableCell>
            <TableCell align="right"><span>Enterprise</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.module}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.module}
              </TableCell>
              
              <TableCell align="right">{row.free}</TableCell>
              <TableCell align="right">{row.basic}</TableCell>
              <TableCell align="right">{row.mediana}</TableCell>
              <TableCell align="right">{row.macro}</TableCell>
              <TableCell align="right">{row.enterprise}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}