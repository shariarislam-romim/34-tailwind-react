// import React from 'react';

import { use } from "react";
// import Card from "../component/PricingCard/card";
import DaisyCard from "../component/DaisyPricingCard/DaisyCard";


const Pricing = ({pricingPromise}) => {
    const pricingData =use(pricingPromise);
    // console.log(pricingData)
    return (
        <div>
            <h2 className="text-4xl font-extrabold m-5">Get Our Membership</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {/* {
                    pricingData.map(pricing => <Card key={pricing.id} pricing={pricing}></Card>)
                } */}
                {
                    pricingData.map(pricing => <DaisyCard 
                    key={pricing.id}
                    pricing={pricing}></DaisyCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;