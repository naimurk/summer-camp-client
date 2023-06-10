import useClasses from "../../Hooks/useClasses";
import useIsAdmin from "../../Hooks/useIsAdmin";
import useIsStudent from "../../Hooks/useIsStudent";
import ClassesCard from "./ClassesCard";
import { Fade, } from "react-awesome-reveal";


const Classes = () => {
    const [classes] = useClasses()
    
    
    return (
       <Fade>
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
       </Fade>
    );
};

export default Classes;