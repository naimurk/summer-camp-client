import useClasses from "../../Hooks/useClasses";
import ClassesCard from "./ClassesCard";


const Classes = () => {
    const [classes] = useClasses()
    // console.log(classes);
    return (
        <div className="w-3/4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center">
                {
                    classes.map(item => <ClassesCard
                    key={item._id}
                    item = {item}
                    >

                    </ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;