import useClasses from "../../../Hooks/useClasses";
import { Fade, } from "react-awesome-reveal";
import 'animate.css';



const ClassSection = () => {
    const [classes] = useClasses()
    // console.log(classes);
    return (
        <Fade cascade>
            <div className=" py-8  lg:py-24">

                <h1 className="text-center py-8 lg:py-14 text-3xl font-semibold ">Popular Sports Classes </h1>
                <div className="grid mt-12 w-3/4 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center items-center">
                    {
                        classes.map(item => <section  key={item._id}>
                            <img className="w-full h-96" src={item.image} alt="" />
                        </section>)
                    }
                </div>
                <div className="flex justify-center mt-12"><button className="btn btn-wide btn-warning">Explore Our Classes</button></div>
            </div>
        </Fade>
    );
};

export default ClassSection;