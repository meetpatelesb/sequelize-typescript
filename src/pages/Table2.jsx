import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Option } from "../utils/constant";

// A super simple expandable component.
// const ExpandedComponent = ({ data }) => <pre>{JSON.stringify({data:data?.capital}, null, 15)}</pre>;

const Table2 = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // total records
  const [pageNo, setPageNo] = useState(3);
  const [recordPerPage, setRecordPerPage] = useState();
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortField, setSortField] = useState("name");
  const [search, setSearch] = useState("");
  const [tName, setTable] = useState("Course");
  console.log(data);
  // const [search, setSearch] = useState("");
  const [filterData, setFilteredData] = useState([]);

  useEffect(() => {
    getData();
  }, [page, search, recordPerPage, sortDirection, sortField, tName]);

  const getData = async () => {
    try {
      console.log(`http://localhost:8021/course/show`);
      const res = await axios.post(`http://localhost:8021/course/show/`, {
        data: {
          page,
          recordPerPage,
          sortDirection,
          sortField,
          search,
          tName: tName,
        },
      });
      const courseData = await res.data;

      setData(courseData.rows);
      setFilteredData(courseData.rows);
      setPageNo(courseData.count);
      console.log(courseData.count);
    } catch (error) {
      console.log(error);
    }
  };
  const setDataTable = (value) => {
    console.log(value + "546556565469842132151");
    setTable(value);
  };
  console.log(tName);

  const handleSort = async (column, sortDirection) => {
    console.log(sortDirection, column.sortField);
    setSortDirection(sortDirection);
    setSortField(column.sortField);
  };

  const fetchUsers = async (page) => {
    setPage(page);
    //page is no. of pages in paginations  15 records and 2 pages
    console.log(page);
  };

  const handlePageChange = (page) => {
    fetchUsers(page);
    setPage(page);
    console.log(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setPageNo(page);
    setRecordPerPage(newPerPage);
  };

  const CourseColumns = [
    {
      name: "Subject",
      selector: (row) => row.name,
      sortable: true,
      sortField: "subject",
    },
    {
      name: "Duration",
      selector: (row) => row.duration,
      sortable: true,
      sortField: "duration",
    },
    {
      name: "Name",
      selector: (row) =>
        row.students.map((rows, index) => rows.firstname + " "),
      sortable: true,
      sortField: "name",
    },
  ];

  const NameColumns = [
    {
      name: " Name",
      selector: (row) => row.firstname,
      sortable: true,
      sortField: "name",
    },
    {
      name: " last name",
      selector: (row) => row.lastname,
      sortable: true,
      sortField: "lname",
    },
    {
      name: "subject",
      selector: (row) =>
        row.courses.map(
          // (rows, index) => "( " + rows.name + "  " + rows.duration  +" )  "
          (rows, index) => rows.name + "   "
        ),
      sortable: true,
      sortField: "subject",
    },
  ];

  if (tName === "Student") {
 var column = NameColumns
  } else if (tName === "Course") {
    var column = CourseColumns;
  } else {
     var column = CourseColumns;
  }
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        Table:
        <select onClick={(e) => setDataTable(e.target.value)}>
          {Option.map((value, index) => {
            return (
              <>
                <option value={value.value}>{value.title}</option>
              </>
            );
          })}
        </select>
      </div>
      <DataTable
        title="User Data"
        columns={column}
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
    </>
  );
};

export default Table2;
