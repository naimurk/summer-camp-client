
import useInstructor from "../../../Hooks/useInstructor";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Fade, Zoom } from "react-awesome-reveal";

const InstructorSection = () => {
  const [instructors] = useInstructor();
  console.log(instructors);

  return (
   <Zoom >
        <div className=" py-8 lg:py-24">
      <h1 className="text-center text-3xl font-semibold ">
        Our Instructors
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-12 justify-center items-center mt-20 w-1/2 mx-auto ">
        {instructors && instructors.length > 0 ? (
          instructors.map((item) => (
            <section key={item._id}>
              <ImageGallery
                items={[
                  {
                    original: item?.image,
                    thumbnail: item?.image,
                    description: item?.instructor_name,
                    
                  },
                ]}
              />
            </section>
          ))
        ) : (
          <p>No instructors found.</p>
        )}
      </div>
      <div className="flex justify-center mt-12"><button className="btn btn-wide btn-warning">Know Our instructors</button></div>
    </div>
   </Zoom>
  );
};

export default InstructorSection;
