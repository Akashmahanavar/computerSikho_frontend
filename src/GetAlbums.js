import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import './home.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './album.css';

export const GetAlbums = () => {
    const [album, setAlbum] = useState([]);
    
    useEffect(() => {
        console.log("in get batches")
        fetch("http://localhost:8080/albums")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setAlbum(result);
            }
            );
    }, []);

    return (
        <div className='album'>
          <h2>  <Button href="/PostAlbum" style={{marginLeft:1150,marginRight:0}} >Add Album</Button> </h2>

<table className="table">
        <thead>
          <tr className="table-active">
          {/* <th>Album Id</th> */}
            <th>Album name</th>           
            <th>Album description</th>
            <th>Album IsActive</th>          
            <th>Start Date</th>
            <th>End Date</th>
           
          </tr>
        </thead>
        <tbody>

          {album.map(album => (

            <tr key={album.albumId}>
              {/* <td>{album.album_id}</td> */}
              <td>{album.albumName}</td>
              <td>{album.albumDescription}</td>
              <td>{album.albumIsActive.toString()}</td>
              
              <td>{album.startDate}</td>
              <td>{album.endDate}</td>
           <Button href={"/UpdateAlbum/"+album.albumId}  variant="info">Update</Button>{' '}
           {/* <Button variant="info">Info</Button>{' '} */}
             </tr>
          ))}
        </tbody>
      </table> 
        </div>
    )
}

export default GetAlbums;