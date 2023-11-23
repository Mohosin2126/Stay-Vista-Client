
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'
const CategoryBox = ({label:title , icon:Icon,selected}) => {


const [params,setParams]=useSearchParams()
const navigate=useNavigate()
const handleClick = () => {
    let currentQuery = {}
    if (params) {
      currentQuery = qs.parse(params.toString())
    }
    const updatedQuery = { ...currentQuery, category: title }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery,
    })

    navigate(url)
  }
params.get("category")
    return (
        <div onClick={handleClick}   className={`flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer ${selected ? 'border-b-neutral-800 text-neutral-800' : ''}`}
          >
            <Icon size={26}></Icon>
            <h1>{title}</h1>
        </div>
    );
};

export default CategoryBox;