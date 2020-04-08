const covid19ImpactEstimator = (data) => {
  const inputData = data;
  const REPORTED_CONST = 10;
  const SEVERE_INFECTED_CONST = 50;
  const { reportedCases } = inputData;
  const currentlyInfected = reportedCases * REPORTED_CONST;
  const severeCurrentlyInfected = reportedCases * SEVERE_INFECTED_CONST;
  const INFECTATION_CONST = 1024;
  return {
    data: inputData,
    impact: {
      currentlyInfected,
      infectionsByRequestedTime: {
        months: currentlyInfected * INFECTATION_CONST
      }
    },
    severeImpact: {
      currentlyInfected: severeCurrentlyInfected,
      infectionsByRequestedTime: {
        months: severeCurrentlyInfected * INFECTATION_CONST
      }
    }
  };
};

export default covid19ImpactEstimator;
