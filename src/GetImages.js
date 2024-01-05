import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './home.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './album.css';

export const GetImages = () => {
    const [image, setImage] = useState([]);

    useEffect(() => {
        console.log("in get batches")
        fetch("http://localhost:8080/Images")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setImage(result);
            }
            );
    }, []);

    return (
        <div className='album'>
            <h2>  <Button href="/PostImage" style={{marginLeft:1150,marginRight:0}} >Add Image</Button> </h2>

<table className="table">
        <thead>
          <tr className="table-active">
          {/* <th>Album Id</th> */}
            <th>Image name</th>           
            {/* <th>Album description</th> */}
            <th>Image IsActive</th>          
            {/* <th>Start Date</th>
            <th>End Date</th> */}
           
          </tr>
        </thead>
        <tbody>

          {image.map(image => (

            <tr key={image.imageId}>
              {/* <td>{album.album_id}</td> */}
              <td><img src={image.imagePath} width={100} /></td>
              {/* <td>{album.album_description}</td> */}
              <td>{image.imageIsActive.toString()}</td>
              
              {/* <td>{album.start_date}</td>
              <td>{album.end_date}</td> */}
           <Button href={"/UpdateImage/"+image.imageId}  variant="info">Update</Button>{' '}
           {/* <Button variant="info">Info</Button>{' '} */}
             </tr>
          ))}
        </tbody>
      </table> 
        </div>
    )
}

export default GetImages;