const covid19ImpactEstimator = (data) => {
    const inputData = data;
    return {
        data: inputData,
        impact: {},
        severeImpact: {}
    }
};

export default covid19ImpactEstimator;


// Input Data
// {
//     region: {
//     name: "Africa",
//     avgAge: 19.7,
//     avgDailyIncomeInUSD: 5,
//     avgDailyIncomePopulation: 0.71
//     },
//     periodType: "days",
//     timeToElapse: 58,
//     reportedCases: 674,
//     population: 66622705,
//     totalHospitalBeds: 1380614
// }

// output data
// {
//     data: {}, // the input data you got
//     impact: {}, // your best case estimation
//     severeImpact: {} // your severe case estimation
//  }