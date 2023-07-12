import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Option } from "../utils/constant";

// A super simple expandable component.
// const ExpandedComponent = ({ data }) => <pre>{JSON.stringify({data:data?.capital}, null, 15)}</pre>;

const Table3 = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // total records
  const [pageNo, setPageNo] = useState(2);
  const [recordPerPage, setRecordPerPage] = useState(4);
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortField, setSortField] = useState("firstname");
  const [search, setSearch] = useState("");
  console.log(data);
  const [filterData, setFilteredData] = useState([]);

  useEffect(() => {
    getData();
  }, [page, search, recordPerPage, sortDirection, sortField]);

  const getData = async () => {
    try {
      const res = await axios.post(`http://localhost:8021/course/showdata/`, {
        data: {
          page,
          recordPerPage,
          sortDirection,
          sortField,
          search,
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
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      sortField: "id",
    },
    {
      name: "Student Name",
      selector: (row) => row.student.firstname,
      sortable: true,
      sortField: "firstname",
    },
    {
      name: "Student Last Name",
      selector: (row) => row.student.lastname,
      sortable: true,
      sortField: "lastname",
    },
    {
      name: "Phone No.",
      selector: (row) => row.student.phone,
      sortable: true,
      sortField: "phone",
    },
    {
      name: "Course",
      selector: (row) => row.course.name,
      sortable: true,
      sortField: "course",
    },
    {
      name: "Duration",
      selector: (row) => row.course.duration,
      sortable: true,
      sortField: "duration",
    },
  ];
  return (
    <>
      <DataTable
        title="User Data"
        columns={CourseColumns}
        data={data}
        onSort={handleSort}
        pagination
        paginationServer
        paginationTotalRows={pageNo}
        paginationRowsPerPageOptions={[3,5,7,10]}
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
       />
    </>
  );
};

export default Table3;
