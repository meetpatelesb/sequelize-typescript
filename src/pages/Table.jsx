import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

// A super simple expandable component.
// const ExpandedComponent = ({ data }) => <pre>{JSON.stringify({data:data?.capital}, null, 15)}</pre>;

const Table = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // total records
  const [pageNo, setPageNo] = useState(4);
  const [recordPerPage, setRecordPerPage] = useState();
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortField, setSortField] = useState("complaintDetails");
  const [search, setSearch] = useState("");

  // const [search, setSearch] = useState("");
  const [filterData, setFilteredData] = useState([]);

  useEffect(() => {
    getData();
    //eslint-
  }, [page, recordPerPage, sortDirection, sortField, search]);
  const getData = async () => {
    try {
      const res = await axios.post(`http://localhost:8021/complaint/show/`, {
        data: {
          page,
          recordPerPage,
          sortDirection,
          sortField,
          search,
        },
      });
      const complaintData = await res.data;

      setData(complaintData.rows);
      setFilteredData(complaintData.rows);
      setPageNo(complaintData.count);
      console.log(complaintData.count);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = async (column, sortDirection) => {
    // console.log(sortDirection, column.sortField);
    setSortDirection(sortDirection);
    setSortField(column.sortField);
  };

  const fetchUsers = async (page) => {
    //page is no. of pages in paginations  15 records and 2 pages
    //page no. which it is present
    console.log(page);
    setPage(page);
  };

  const handlePageChange = (page) => {
    fetchUsers(page);
    setPage(page);
    console.log(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    // total rows on one pages ROWS PER PAGE
    // console.log(newPerPage, page);
    setPageNo(page);
    setRecordPerPage(newPerPage);
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
  ];
  return (
    <DataTable
      title="User Data"
      columns={columns}
      data={data}
      onSort={handleSort}
      pagination
      paginationServer
      paginationTotalRows={pageNo}
      paginationRowsPerPageOptions={[1, 2, 3]}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      dense
      fixedHeader
      fixedHeaderScrollHeight="500px"
      highlightOnHover
      selectableRowsHighlight
      subHeader
      subHeaderComponent={
      <input
        type="text"
        placeholder="Search "
        className="form-control w-25"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      }
      subHeaderAlign="right"
      subHeaderWrap
      actions={<button className="btn btn-md btn-info">Export</button>}
    />
  );
};

export default Table;
