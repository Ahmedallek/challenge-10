const stringFrequency = (strings) => {
    return strings.reduce((acc, str) => {
      acc[str] = (acc[str] || 0) + 1;
      return acc;
    }, {});
  };
  