   import {Link} from "react-router-dom"
const VansMain = ({ id, name, price, description, imageUrl, type }) => {
  console.log(id);
  console.log(name + description);
  return (
    <div className="border border-black w-100px">
  
      <img src={imageUrl} alt="" srcset="" className="rounded" />
      <div className="des">
        <div className="name">
          <h1 className="my-2">{name}</h1>
          <h1>${price}</h1>
        </div>
        <div className="mt-2 border border-black w-1/2 text-center rounded-md">
          <h1>{type}</h1>
        </div>
      </div>
    </div>
  );
};
export default VansMain;
