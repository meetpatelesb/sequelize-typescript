import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";


// A super simple expandable component.
// const ExpandedComponent = ({ data }) => <pre>{JSON.stringify({data:data?.capital}, null, 15)}</pre>;

const Table = () => {

  const [data, setData] = useState([]);


  useEffect(() => {
    getData();
  }, []);



  const getData = async () => {
    try {
      console.log(`http://localhost:8021/complaint/show`);
      const res = await axios.get(
        `http://localhost:8021/complaint/show/`
      );
      const complaintData = await res.data;
      console.log(complaintData);
      setData(complaintData.rows);
      console.log(complaintData.rows);
      // setFilteredData(bookAuthor.rows);
      // setPageNo(bookAuthor.count);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = async (column, sortDirection) => {
    console.log(sortDirection, column.sortField);
    // setSortDirection(sortDirection);
    // setSortField(column.sortField);
  };

  const fetchUsers = async (page) => {
  
    //page is no. of pages in paginations  15 records and 2 pages
    console.log(page);
  };

  const handlePageChange = (page) => {
    fetchUsers(page);
    console.log(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    console.log(newPerPage, page);
  };

  const columns = [
    {
      name: " Id",
      selector: (row) => row.id,
      sortable: true,
      sortField: "id",
    },
    {
      name: " Details",
      selector: (row) => row.complaintDetails,
      sortable: true,
      sortField: "complaintDetails",
    },
    {
      name: "complaintType",
      selector: (row) => row.complaintType,
      sortable: true,
      sortField: "complaintType",
    },
    {
      name: " Name",
      selector: (row) => row.student.firstname,
      sortable: true,
      sortField: "name",
    },
    // {
    //   name: "complaintType",
    //   selector: (row) => row.complaintType,
    //   sortable: true,
    //   sortField: "complaintType",
    // },
  ];
  return (
    <DataTable
      title="User Data"
      columns={columns}
      data={data}
      onSort={handleSort}
      pagination
      // paginationServer
      // paginationTotalRows={pageNo}
      paginationRowsPerPageOptions={[3, 5, 10, 12, 15]}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      dense
      // direction="auto"
      fixedHeader
      fixedHeaderScrollHeight="500px"
      highlightOnHover
      // progressPending
      // responsive
      selectableRowsHighlight
      // selectableRowsNoSelectAll
      // selectableRowsRadio="radio"
      // striped
      subHeader
      // subHeaderComponent={
        // <input
        //   type="text"
        //   placeholder="Search "
        //   className="form-control w-25"
        //   value={search}
        //   onChange={(e) => {
        //     setSearch(e.target.value);
        //   }}
        // />
      // }
      subHeaderAlign="right"
      subHeaderWrap
      actions={<button className="btn btn-md btn-info">Export</button>}
    />
  );
}

export default Table;
