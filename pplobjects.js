function countPeopleByCity(people) {
    return people.reduce((acc, person) => {
      const city = person.city;
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    }, {});
  }