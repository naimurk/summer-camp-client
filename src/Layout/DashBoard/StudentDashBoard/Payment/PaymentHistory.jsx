import { useContext } from "react";
import usePaymenHistory from "../../../../Hooks/usePaymenHistory";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";


const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const [paymentHistory] = usePaymenHistory()
    console.log(paymentHistory);
    return (
        <div className="w-3/4 h-full mt-24 mx-auto bg-slate-400 p-14">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>email</th>
        <th>TransactionId</th>
        <th>amount</th>
        <th>date an time</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
        user?.email && paymentHistory.map((item, index )=> <tr
        key={item?._id}
        >
        <th>{index + 1}</th>
        <td>{item?.email}</td>
        <td>{item?.transaction}</td>
        <td>{item?.amount}</td>
        <td>{new Date(item?.data).toLocaleString()}</td>
      </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;