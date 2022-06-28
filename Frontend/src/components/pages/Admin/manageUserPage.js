import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import makeStyles from "@material-ui/core/styles/makeStyles";
import EditIcon from '@mui/icons-material/Edit';
import {useState, useEffect} from "react";
import axios from 'axios';

function createData(image, name, price, stock) {
  return {
    image, name, price, stock
  };
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Email Address',
    },
    {
        id: 'shopname',
        numeric: false,
        disablePadding: false,
        label: 'Shop Name',
    },
    {
        id: 'fullname',
        numeric: false,
        disablePadding: false,
        label: 'Owner Name',
    },
    {
        id: 'phonenum',
        numeric: false,
        disablePadding: false,
        label: 'Phone Number',
    },
    {
        id: 'username',
        numeric: false,
        disablePadding: false,
        label: 'Username',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all',
                        }}
                    />
                </TableCell>
                <TableCell/>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        style={{fontSize: "180%", fontWeight:"bold"}}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
}

const deleteProcess = (id) => {
    deleteUser(id);
    reload()
};

const deleteUser = async (id) => {
    await axios.delete("https://stingray-app-4l8lu.ondigitalocean.app/users/delete/" + id).then(res => {
        
    }).catch(err => {
        console.log(err);
    })
    
};

const reload = () => {
    window.location.reload(false);
};

const EnhancedTableToolbar = (props) => {
    const { numSelected, selectedId } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                    fontSize="200%"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                    fontSize="250%"
                    color="#000193"
                >
                    Users
                </Typography>
            )}

            {/* <Button variant="contained" href="/newproduct"
                sx={{
                    marginRight: '1.5vw', height:'2.5vw', minHeight:'30px', width: '12vw', minWidth: '120px',
                    backgroundColor: '#FF8000', color: "white", fontSize: '110%',
                    '&:hover': {
                        backgroundColor: "#FFB000", color: "white"
                    }
                }}>
                Add New Product
            </Button> */}

            {numSelected > 0 ? (
                <Tooltip title={<span style={{ fontSize: "200%" }}>Delete</span>}>
                    <IconButton onClick={() => deleteProcess(selectedId)}>
                        <DeleteIcon style={{ fontSize: '200%' }} />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title={<span style={{ fontSize: "200%" }}>Filter by year</span>}>
                    <IconButton>
                        <FilterListIcon sx={{ fontSize: '200%'}} />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

const useStyles = makeStyles({
    toolbar: {
      "& > p": {
        fontSize: "170%",
        fontWeight: 600,
        margin: '0'
      },
      "& > div": {
        fontSize: "170%",
        fontWeight: 500,
      }
    },

    prodImg: {
        width: "5vw",
        height: "5vw",
        minWidth:"60px",
        minHeight:"60px",
        border: "1px #cfcfcf solid", 
    }
  });

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function ManageUserPage() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        await axios.get("https://stingray-app-4l8lu.ondigitalocean.app/users/allUsers").then(res => {
            setUsers(res.data.usersData)

            console.log("Get user: ", users)
        }).catch(err => {
            console.log("Error: ", err);
        })
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'white',
        border: '1px #D3D2D1 solid',
        '&:hover': {
            backgroundColor: '#F3F3F3',
        },
        marginRight: '0.5vw',
        marginLeft: '2vw',
        height: '48%',
        width: '100%',
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        height: '100%',
        width: '100%',
        '& .MuiInputBase-input': {
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            width: '100%',
            height: '100%'
        },
    }));

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = users.map((n) => n._id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

    return (
        <>
        <Box sx={{ width: '100%', margin: 'auto', paddingTop: '1.4vw' }}>
            <Paper sx={{
                width: '100%',
                height: '6vw',
                minHeight: '55px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 3
            }}
                elevation={4}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon style={{ height: '20px', width: 'auto' }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search for user…"
                        inputProps={{ 'aria-label': 'Search', style: { fontSize: '150%' } }}
                    />
                </Search>
                <Button variant="contained" href="/"
                    sx={{
                        marginRight: '2vw', height: '50%', width: '10vw', backgroundColor: '#01027B',
                        fontSize: '120%', color: 'white', '&:hover': {
                            backgroundColor: "#000193", color: "white"
                        }
                    }}>
                    Search
                </Button>
            </Paper>
            <Paper sx={{ mb: 2 }} elevation={3}>
                <div style={{ width: '95%', margin: 'auto' }}>
                    <EnhancedTableToolbar numSelected={selected.length} selectedId={selected}/>
                    <TableContainer>
                        <Table aria-labelledby="tableTitle" >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                selectedId={selected._id}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={users.length}
                            />
                            <TableBody>
                                {stableSort(users, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(row._id);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row._id)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row._id}
                                                selected={isItemSelected}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell style={{width:'2%'}}>
                                                    <Tooltip title={<span style={{ fontSize: "200%" }}>Edit</span>}>
                                                        <IconButton href={'/edituser?id=' + row._id}>
                                                            <EditIcon style={{fontSize:'150%', color:'black'}}/>
                                                        </IconButton>                                                     
                                                    </Tooltip>                                                   
                                                </TableCell>
                                                <TableCell align="left" style={{fontSize: '150%'}}>
                                                    {row.email}
                                                </TableCell>
                                                <TableCell align="left" style={{fontSize: '150%'}}>
                                                    {row.shop.shopName}
                                                </TableCell>
                                                <TableCell align="left" style={{fontSize: '150%'}}>
                                                    {row.fullName}
                                                </TableCell>
                                                <TableCell align="left" style={{fontSize: '150%'}}>
                                                    {row.phoneNumber}
                                                </TableCell>
                                                <TableCell align="left" style={{fontSize: '150%'}}>
                                                    {row.userName}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow >
                                        <TableCell colSpan={5} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={users.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        classes={{
                            toolbar: classes.toolbar,
                          }}
                    />
                </div>
            </Paper>
        </Box>
        </>
    );
}
