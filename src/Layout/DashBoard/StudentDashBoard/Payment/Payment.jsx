import { Elements} from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../Checkout/Checkout";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe('pk_test_51NFV1sCJxnWqbAIJ156QGc5eUMNrjRJxnXBUQX8AaACgtOAQC2LdoFYWULXrxKUvohLVwePcqTfgNfSCv1gLHwh300q6KMkB94');

const Payment = () => {
    const location = useLocation();
    // console.log(location);
    const item = location?.state;
    // console.log(item);
    // if (!item) {
    //     // Handle the case when the item is not present in the state
    //     return <div>No item data available.</div>;
    //   }

    //   console.log(item)
    return (
        <div className="bg-white w-1/2 mx-auto p-14">
            <Elements stripe={stripePromise}>
                 <Checkout item = {item} ></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;