
const CategoryBox = ({label:title , icon:Icon}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transiton cursor-pointer">
            <Icon size={26}></Icon>
            <h1>{title}</h1>
        </div>
    );
};

export default CategoryBox;