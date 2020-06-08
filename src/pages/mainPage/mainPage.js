import React from 'react'
import "./MainPage.css"
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#D9F2F5",
      color: "#1F3049",
      textAlign: 'center',
    },
    body: {
      fontSize: 14,
      align: 'center',
      textAlign: 'center',
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


const MainPage = () => {

    const classes = useStyles();

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead style={{ borderRadius: '20px', }}>
                    <TableRow >
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell>Тип счетчика</StyledTableCell>
                        <StyledTableCell>Сервисная компания</StyledTableCell>
                        <StyledTableCell>№ модема</StyledTableCell>
                        <StyledTableCell>Тип ресурса</StyledTableCell>
                        <StyledTableCell>Потребитель</StyledTableCell>
                        <StyledTableCell>Серийный номер</StyledTableCell>
                        <StyledTableCell>Клиентский сектор</StyledTableCell>
                        <StyledTableCell>Оплата</StyledTableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>

                        <StyledTableRow>
                          <StyledTableCell></StyledTableCell>
                          <StyledTableCell>09876</StyledTableCell>
                          <StyledTableCell>Ларион</StyledTableCell>
                          <StyledTableCell>212</StyledTableCell>
                          <StyledTableCell>Холодная вода</StyledTableCell>

                          <StyledTableCell>КАСКАД</StyledTableCell>
                          <StyledTableCell>1322</StyledTableCell>
                          <StyledTableCell>Юридический</StyledTableCell>
                          <StyledTableCell>есть</StyledTableCell>

                        </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MainPage

