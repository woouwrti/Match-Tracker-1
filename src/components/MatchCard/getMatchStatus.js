export const getMatchStatus = (status) => {
  if (status === "Scheduled") {
    return "Match preparing";
  } else if (status === "Ongoing") {
    return "Live";
  } else if (status === "Finished") {
    return "Finished";
  } else {
    return status;
  }
};

export default getMatchStatus;
