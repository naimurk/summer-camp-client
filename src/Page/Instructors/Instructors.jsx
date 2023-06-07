import useInstructor from "../../Hooks/useInstructor";
import InstructorCard from "./InstructorCard";


const Instructors = () => {
    const [instructors] = useInstructor();
    console.log(instructors);
    return (
        <div className="w-3/4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center">
                 {
                    instructors.map(item => <InstructorCard
                    key={item._id}
                    item = {item}
                    >

                    </InstructorCard>)
                 }
            </div>
        </div>
    );
};

export default Instructors;