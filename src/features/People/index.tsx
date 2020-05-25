import Add from '@material-ui/icons/Add';
import Chip from '../../components/Chip';
import FilterListIcon from '@material-ui/icons/FilterList';
import FlexColumn from '../../components/blocks/FlexColumn';
import FlexRow from '../../components/blocks/FlexRow';
import InputAdornment from '@material-ui/core/InputAdornment';
import NormalButton from './Components/NormalButton';
import Paper from '@material-ui/core/Paper';
import PurpleButton from './Components/PurpleButton';
import React, { useState } from 'react';
import Search from '@material-ui/icons/Search';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import UpperText from '../../components/UpperText';

interface IPerson {
  name: string;
  status: 'client' | 'lead';
  phone: string;
  email: string;
}

const peopleList: IPerson[] = [
  {
    name: 'Paulo',
    status: 'client',
    phone: '3728372',
    email: 'hasoihea@gmail.com',
  },
  {
    name: 'Paulo',
    status: 'client',
    phone: '3728372',
    email: 'hasoihea@gmail.com',
  },
  {
    name: 'Paulo',
    status: 'client',
    phone: '3728372',
    email: 'hasoihea@gmail.com',
  },
  {
    name: 'Paulo',
    status: 'lead',
    phone: '3728372',
    email: 'hasoihea@gmail.com',
  },
  {
    name: 'Paulo',
    status: 'client',
    phone: '3728372',
    email: 'hasoihea@gmail.com',
  },
  {
    name: 'Paulo',
    status: 'lead',
    phone: '3728372',
    email: 'hasoihea@gmail.com',
  },
  {
    name: 'Paulo',
    status: 'client',
    phone: '3728372',
    email: 'hasoihea@gmail.com',
  },
  {
    name: 'Paulo',
    status: 'client',
    phone: '3728372',
    email: 'hasoihea@gmail.com',
  },
];

const People = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (value: string) => {
    setRowsPerPage(+value);
    setPage(0);
  };

  const getChipTextColor = (status: 'client' | 'lead') => (status === 'client' ? '#0065ff' : '#666666');
  const getChipBackgroundColor = (status: 'client' | 'lead') => (status === 'client' ? '#f3f7ff' : '#f6f6f6');
  const getChipText = (status: 'client' | 'lead') => (status === 'client' ? 'Cliente' : 'Lead');

  return (
    <FlexColumn style={{ marginTop: 30 }}>
      <FlexRow style={{ marginBottom: 30 }}>
        <FlexRow style={{ flexGrow: 1 }}>
          <NormalButton style={{ marginRight: 20 }}>
            <FilterListIcon style={{ color: '#0065ff', marginRight: 5 }} />
            Filtrar
          </NormalButton>
          <TextField
            style={{ background: 'white', width: '50%' }}
            placeholder="Buscar por nome..."
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </FlexRow>
        <PurpleButton>
          <Add />
          adicionar
        </PurpleButton>
      </FlexRow>
      <Paper>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <UpperText>nome</UpperText>
                </TableCell>
                <TableCell align="left">
                  <UpperText>status</UpperText>
                </TableCell>
                <TableCell align="left">
                  <UpperText>telefone</UpperText>
                </TableCell>
                <TableCell align="left">
                  <UpperText>e-mail</UpperText>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {peopleList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">
                    <Chip
                      style={{ backgroundColor: getChipBackgroundColor(row.status) }}
                      textColor={getChipTextColor(row.status)}
                      text={getChipText(row.status)}
                    />
                  </TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={peopleList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={e => handleChangeRowsPerPage(e.target.value)}
          labelRowsPerPage="Itens por pagina"
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count !== -1 ? count : `more than ${to}`}`}
        />
      </Paper>
    </FlexColumn>
  );
};

export default People;
