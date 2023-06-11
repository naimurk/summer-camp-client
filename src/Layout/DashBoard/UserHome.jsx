import useIsAdmin from "../../Hooks/useIsAdmin";
import useIsStudent from "../../Hooks/useIsStudent";
import useIsInstructor from "../../Hooks/useIsInstructor";


const UserHome = () => {
    const [isAdmin] = useIsAdmin()
    const [isStudent] = useIsStudent()
    const [isInstructor] = useIsInstructor()

    return (
        <div className="w-1/2 mx-auto p-16  text-center bg-warning">


            <div className="">
                {
                    isAdmin?.admin && <>
                        <h1 className="text-5xl">welcome to Admin DashBoard</h1>
                        
                    </>
                }
            </div>




            <div>
                {
                    isStudent?.admin && <>
                        <h1 className="text-5xl">welcome to student DashBoard</h1>
                        
                    </>
                }
            </div>


            <div>
                {
                    isInstructor?.admin && <>
                        <h1 className="text-5xl">welcome to instructor DashBoard</h1>
                        
                    </>
                }
            </div>


        </div>
    );
};

export default UserHome;