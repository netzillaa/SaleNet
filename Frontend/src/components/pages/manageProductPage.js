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

const rows = [
  createData('https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8', 'Dutch Lady Milk', 8.70, 5.0),
  createData('https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8', 'Atest', 25.0, 10.0),
  createData('https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8', 'Btest', 25.0, 10.2),
  createData('https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8', 'Ctest', 25.0, 10.3),
  createData('https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8', 'Dtest', 25.0, 10.6),
  createData('https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8', 'Etest', 25.0, 10.4),
  createData('https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8', 'RAtest', 25.0, 10.2),
  createData('https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8', 'AYtest', 25.0, 10.4),
  createData('https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8', 'AItest', 25.0, 10.8),
  createData('https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8', 'Ztest', 25.0, 10.6),
  createData('https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8', 'Utest', 25.0, 10),
  createData('https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8', 'Qtest', 25.0, 10),
  createData('https://cf.shopee.com.my/file/dd99143d5f75962339ee55b3b754a5e8', 'AAtest', 25.0, 10),
];

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
        id: 'name',
        numeric: true,
        disablePadding: false,
        label: 'Name',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Price (RM)',
    },
    {
        id: 'stock',
        numeric: true,
        disablePadding: false,
        label: 'Stock',
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
                <TableCell style={{fontSize: "180%"}}>Product</TableCell>
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

const deleteProduct = async (id) => {
    await axios.delete("http://localhost:4000/products/delete/" + id).then(res => {
        
    }).catch(err => {
        console.log(err);
    })
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
                    fontSize="300%"
                    color="#000193"
                >
                    Products
                </Typography>
            )}

            <Button variant="contained" href="/newproduct"
                sx={{
                    marginRight: '1.5vw', height:'2.5vw', minHeight:'30px', width: '12vw', minWidth: '120px',
                    backgroundColor: '#FF8000', color: "white", fontSize: '110%',
                    '&:hover': {
                        backgroundColor: "#FFB000", color: "white"
                    }
                }}>
                Add New Product
            </Button>

            {numSelected > 0 ? (
                <Tooltip title={<span style={{ fontSize: "200%" }}>Delete</span>}>
                    <IconButton onClick={() => deleteProduct(selectedId)}>
                        <DeleteIcon style={{ fontSize: '200%' }} />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title={<span style={{ fontSize: "200%" }}>Filter Category</span>}>
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

export default function manageProductPage() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const classes = useStyles();
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getproduct();
    }, []);

    const getproduct = async () => {
        await axios.get("http://localhost:4000/products/allProducts").then(res => {
            setProduct(res.data.productsData)
        }).catch(err => {
            console.log(err);
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
            const newSelecteds = products.map((n) => n._id);
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
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

    return (
        <Box sx={{ width: '90%', margin: 'auto', paddingTop: '4vw' }}>
            <Paper sx={{
                width: '100%',
                height: '6vw',
                minHeight: '55px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 5
            }}
                elevation={4}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon style={{ height: '20px', width: 'auto' }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search for product…"
                        inputProps={{ 'aria-label': 'Search', style: { fontSize: '150%' } }}
                    />
                </Search>
                <Button variant="contained" href="/"
                    sx={{
                        marginRight: '2vw', height: '50%', width: '13vw', backgroundColor: '#01027B',
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
                                rowCount={products.length}
                            />
                            <TableBody>
                                {stableSort(products, getComparator(order, orderBy))
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
                                                        <IconButton href="/editproduct">
                                                            <EditIcon style={{fontSize:'150%', color:'black'}}/>
                                                        </IconButton>                                                     
                                                    </Tooltip>                                                   
                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                    style={{fontSize: '150%'}}
                                                >
                                                    <img src={row.productImage} className={classes.prodImg}/>
                                                </TableCell>
                                                <TableCell align="left" style={{fontSize: '150%', width:'30%'}}>
                                                    {row.productName}
                                                </TableCell>
                                                <TableCell align="left" style={{fontSize: '150%'}}>
                                                    {row.productPrice}
                                                </TableCell>
                                                <TableCell align="left" style={{fontSize: '150%'}}>
                                                    {row.productQuantity}
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
                        count={products.length}
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
    );
}