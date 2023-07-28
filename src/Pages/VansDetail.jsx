import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
const VansDetail = ()=>{
    const params = useParams();
    console.log(params)
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
          .then((res) => res.json())
          .then((data) => console.log(data));
      }, [params.id]);
    return <div className="border border-black">
         <details>This is van details</details>
         </div>
}
export default VansDetail;