import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";

function Protected1(props) {
    let Cmp=props.Cmp;
 const   navigate=useNavigate();
    useEffect(() => {
        if (!sessionStorage.getItem("student-info")) {
                  navigate("/StudentLogin");
        }
      }, []);

      return(
         <div>
             <Cmp />
         </div>
      )
}
export default Protected1;