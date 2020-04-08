const covid19ImpactEstimator = (data) => {
  const inputData = data;
  const REPORTED_CONST = 10;
  const SEVERE_INFECTED_CONST = 50;
  const {reportedCases} = inputData;
  const _currentlyInfected = reportedCases * REPORTED_CONST;
  const _severeCurrentlyInfected = reportedCases * SEVERE_INFECTED_CONST;
  const INFECTATION_CONST = 1024;

  return {
    data: inputData,
    impact: {
      currentlyInfected: _currentlyInfected,
      infectionsByRequestedTime: _currentlyInfected * INFECTATION_CONST
    },
    severeImpact: {
      currentlyInfected: _severeCurrentlyInfected,
      infectionsByRequestedTime: _severeCurrentlyInfected * INFECTATION_CONST
    }
  };
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
