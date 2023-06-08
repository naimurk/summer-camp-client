import useEnrolledClasses from "../../../../Hooks/useEnrolledClasses";


const Enrolled = () => {
    const [enrolled, refetch] = useEnrolledClasses();
    console.log(enrolled);
    return (
        <div>
           
        </div>
    );
};

export default Enrolled;