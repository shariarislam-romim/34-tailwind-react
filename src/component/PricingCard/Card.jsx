// import React from 'react';

// import { CircleCheckBig } from "lucide-react";
import Feature from "./Feature";


const Card = ({pricing}) => {
    // console.log(pricing)
    const {name,price,description,features} = pricing;
    return (
        <div className="bg-amber-600 border rounded-2xl flex flex-col p-4">
            {/* card header */}
            <div>
                <h2 className="text-3xl">{name}</h2>
                <h4 className="text-3xl">{price}</h4>
                <p>{description}</p>
            </div>
            {/* card body */}
            

            <div className="bg-amber-300 rounded-2xl mt-10 flex-1">
                {/* {
                    features.map((feature,index) => (
                        <p key={index} className='flex mt-4'>
            <CircleCheckBig className='mr-2'></CircleCheckBig>{feature}
        </p>
                    ))
                } */}
                {
                    features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="btn btn-w-full mt-4">Subscribe</button>
        </div>
    );
};

export default Card;