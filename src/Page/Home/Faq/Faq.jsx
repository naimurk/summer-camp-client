import Lottie from "lottie-react";
import faq from '../../../../faq.json'

const Faq = () => {
    return (
        <div className=" flex flex-col p-5 lg:flex-row justify-center items-center w-full lg:w-4/5 mx-auto">
            <div className="lg:w-1/2 w-full">
                <Lottie animationData={faq}></Lottie>
            </div>
            <div className="lg:w-1/2 lg:p-14 w-full p-8 bg-warning rounded-xl">


                {/* collapse start */}

                <div tabIndex={0} className="collapse my-4 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    What age groups do you cater to in your sports academy?
                    </div>
                    <div className="collapse-content">
                        <p> Our sports academy offers programs for a wide range of age groups, starting from 5 years old and going up to adults. We have specialized training sessions and coaching programs tailored to different age brackets, ensuring the best learning experience for each participant.</p>
                    </div>
                </div>
               {/* collapse end */}
                {/* collapse start */}

                <div tabIndex={0} className="collapse my-4 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    How do I enroll my child in your sports academy?
                    </div>
                    <div className="collapse-content">
                        <p>Enrolling your child in our sports academy is a simple process. You can visit our website and navigate to the "Enrollment" section. There, you will find a registration form that needs to be filled out with the necessary information. Once we receive your submission, our team will review it, and we will reach out to you to finalize the enrollment details.</p>
                    </div>
                </div>
               {/* collapse end */}
                {/* collapse start */}

                <div tabIndex={0} className="collapse my-4 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    What sports disciplines do you offer at your academy?
                    </div>
                    <div className="collapse-content">
                        <p>Our sports academy provides comprehensive training in various disciplines. Some of the sports we offer include soccer, basketball, tennis, swimming, martial arts, gymnastics, and athletics. We aim to provide a diverse range of options so that every individual can find a sport that matches their interests and aspirations.</p>
                    </div>
                </div>
               {/* collapse end */}
                {/* collapse start */}

                <div tabIndex={0} className="collapse my-4 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    What qualifications and experience do your coaches have?
                    </div>
                    <div className="collapse-content">
                        <p>At our sports academy, we take great pride in our coaching staff. All our coaches are highly qualified and experienced in their respective sports. They hold relevant certifications, have extensive playing and coaching backgrounds, and undergo regular training to stay up to date with the latest coaching techniques. We ensure that our coaches provide the best guidance and mentorship to our students.</p>
                    </div>
                </div>
               {/* collapse end */}



            </div>
        </div>
    );
};

export default Faq;