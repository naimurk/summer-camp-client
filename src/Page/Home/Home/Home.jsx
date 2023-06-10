import Banner from "../Banner/Banner";
import ClassSection from "../CalassSection/ClassSection";
import Faq from "../Faq/Faq";
import InstructorSection from "../InstructorSection/InstructorSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ClassSection></ClassSection>
            <InstructorSection></InstructorSection>
            <Faq></Faq>
        </div>
    );
};

export default Home;