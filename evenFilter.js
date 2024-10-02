const avg = (numbers) => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const sum = evenNumbers.reduce((acc, num) => acc + num, 0);
    return sum / evenNumbers.length 
  };
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(averageEvenNumbers(numbers));
