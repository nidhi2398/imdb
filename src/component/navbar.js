import React,{useState} from "react";
import {Navbar,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap";
import "./navbar.css";


let Navbar1=({wholeData,setFilterD})=>{
   const [search,setSearch]=useState("");
    let handleSearch=(e)=>{
     setSearch(e.target.value);
     console.log(e.target.value);
     let arr=wholeData;
     arr=arr.filter(item=>item.title.toUpperCase().startsWith(e.target.value.toUpperCase()));
     setFilterD([...arr]);
    }

    return <Navbar expand="lg"className="navbar1">
    <Navbar.Brand href="#"style={{color:"white",margin:"10px 30px 10px 30px",fontWeight:"bold"}}>Discover</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px',color:"white" }}
        navbarScroll
      >
        <Nav.Link href="#action1" style={{color:"white",marginLeft:"300px",fontWeight:"bold"}}>Popular</Nav.Link>
        <Nav.Link href="#action2"style={{color:"white",marginLeft:"50px",fontWeight:"bold"}}>Newest</Nav.Link>
        <Nav.Link href="#action1" style={{color:"white",marginLeft:"50px",fontWeight:"bold"}}>Trending</Nav.Link>
        <Nav.Link href="#action2"style={{color:"white",marginLeft:"50px",fontWeight:"bold"}}>Top Rated</Nav.Link>
      </Nav>
      <Form className="d-flex"style={{marginLeft:"260px"}}>
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          onChange={(e)=>handleSearch(e)}
        />
      </Form>
    </Navbar.Collapse>
  </Navbar>

    
}
export default Navbar1