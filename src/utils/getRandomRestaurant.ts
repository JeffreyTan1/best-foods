const MAX_RESTAURANTS_ID = 4;

export const getRandomRestaurant: (notThisOne?: number) => number = (notThisOne?: number) => {
  const restaurantNumber = Math.floor(Math.random() * MAX_RESTAURANTS_ID) + 1;

  if (restaurantNumber !== notThisOne) {
    return restaurantNumber;
  } else {
    return getRandomRestaurant(notThisOne);
  }
}

export const getOptionsForVote = () => {
  const firstId = getRandomRestaurant();
  const secondId = getRandomRestaurant(firstId);
  return [firstId, secondId];
}