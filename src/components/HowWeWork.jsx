import React from "react";


const HowWeWork = () => {


    const steps = [
        { number: 1, text: "SUBMIT INTAKE FORM" },
        { number: 2, text: "WE DO THE SEARCH & CURATION FOR THE BEST JOBS" },
        { number: 3, text: "YOU APPROVE, WE DO THE TEDIOUS PART (APPLYING)" },
        { number: 4, text: "YOU GET THE INTERVIEWS" },
    ];

    return (
        <div className="bg-white p-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">How we work?</h2>
            <div className="flex justify-between items-center">
                {steps.map((step) => (
                    <div key={step.number} className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 text-xl font-semibold">
                            {step.number}
                        </div>
                        <div className="w-32 h-1 bg-blue-500 my-2"></div>
                        <p className="text-center text-sm font-medium text-gray-700 w-40">
                            {step.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowWeWork;