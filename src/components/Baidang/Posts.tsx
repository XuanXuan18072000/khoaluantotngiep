import { MenuItem, Select } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import React, { useEffect, useState } from 'react'
import apiCaller from '../../utils/apiCaller'
import avatar from './assets/avatar.jpg'
import Post from './Post'
import './Style-post.css'


export default function Posts() {
  const [data, setData] = useState<[]>([])
  const [page, setPage] = useState(1)
  const [type, setType] = useState(0)
  const handleChange = (event: any, value: any) => {
    setPage(value)
  }
  const fetchData = async () => {
    const employeeData = await apiCaller('/', 'get', null, page)
    setData(employeeData?.data)
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    fetchData()
  }, [page])
 


  return (
    <div className="content-container">
      <div className="profile">
        <div className="cover">
          <img
            src="https://i.pinimg.com/736x/17/08/9f/17089f4c221d8a8d19371546cf706fa0--twitter-cover-cover-pics.jpg"
            alt=""
          />
        </div>
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="name">
          Hồng Xuân
        </div>
      </div>
      <div className="filter">
        <Select
          id="demo-simple-select"
          value={type}
          onChange={(e: any) => setType(e.target.value)}
        >
          <MenuItem value={0}>Bài viết theo giờ</MenuItem>
          <MenuItem value={1}>Bài viết theo ngày</MenuItem>
        </Select>
      </div>
      {data.map((e, idx) => (
        <Post key={idx} data={e} type={type} />
      ))}
      <Pagination
        count={4}
        color="secondary"
        className="pagination"
        onChange={handleChange}
        page={page}
      />
    </div>
  )
}
