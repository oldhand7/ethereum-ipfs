import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {useState,useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../context/UserContext';
import "../styles/register.css";
import {currentItem} from "../store/user"
import { useNavigate  } from 'react-router-dom';

const PaypalComponent = () => {
    const navigate = useNavigate();
    const {addPayment} = useContext(UserContext);
    useEffect(()=>{
        console.log(currentItem);
    },[]);
    const initialOptions = {
        "client-id": "ASjtWk8VFz5fuYL8htVmI-utK95JQaSo2q70YEYZ87JQCS5GQdymlgoJWWV_GXcyjT0xw6REQCFhQSdT",
        currency: "CAD",
        intent: "capture",
    };
    return (
        <div className="pcontainer">
        <PayPalScriptProvider
            options={initialOptions}
        >
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1.0",
                                },
                            },
                        ],
                    });
                }}
                onApprove={async(data, actions) => {
                    await addPayment(currentItem);
                    navigate('/downloadfiles');
                }}
            />
        </PayPalScriptProvider>
        </div>
    )
}

export default PaypalComponent;