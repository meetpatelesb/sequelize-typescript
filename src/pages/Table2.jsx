import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

// A super simple expandable component.
// const ExpandedComponent = ({ data }) => <pre>{JSON.stringify({data:data?.capital}, null, 15)}</pre>;

const Table2 = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState();
  const [loading, setLoading] = useState(false);
  // total records
  const [pageNo, setPageNo] = useState(2);
  const [recordPerPage, setRecordPerPage] = useState(3);
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortField, setSortField] = useState("userName");

  const [search, setSearch] = useState("");
  const [filterData, setFilteredData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      console.log(`http://localhost:8021/course/show`);
      const res = await axios.get(`http://localhost:8021/course/show/`);
      const complaintData = await res.data;
      
      setData(complaintData.rows);
      
      setFilteredData(complaintData.rows);
      setPageNo(complaintData.count);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = async (column, sortDirection) => {
    console.log(sortDirection, column.sortField);
    setSortDirection(sortDirection);
    setSortField(column.sortField);
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
      name: " Name",
      selector: (row) => row.name,
      sortable: true,
      sortField: "id",
    },
    {
      name: " Duration",
      selector: (row) => row.duration,
      sortable: true,
      sortField: "complaintDetails",
    },
    {
      name: "complaintType",
      selector: (row) =>
        row.students.map(
          (rows, index) => "( " + rows.firstname + " " + rows.lastname + " )  "
        ),
      sortable: true,
      sortField: "complaintType",
    },
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
};

export default Table2;
