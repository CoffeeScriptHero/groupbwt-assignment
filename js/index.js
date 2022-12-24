// -------------------- First task --------------------

let arr = [];

for (let i = 0; i < 50; i++) {
  arr[i] = Math.floor(Math.random() * 151);
}

const findMax = (a) => {
  if (!a.length) return;

  let max = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }
  return max;
};

console.log("Max:", findMax(arr));

// -----------------------------------------------------

// -------------------- Second task --------------------

const bubbleSort = (a) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        const tmp = a[j + 1];
        a[j + 1] = a[j];
        a[j] = tmp;
      }
    }
  }
};

console.log(arr);
bubbleSort(arr);
console.log(arr);

// -----------------------------------------------------

// -------------------- Fourth task --------------------

let arr1 = [];
arr1[0] = -5;

for (let i = 1; i < 70; i++) {
  arr1[i] = arr1[i - 1] + 2;
}

const binarySearch = (a, num) => {
  let left = 0;
  let right = a.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (a[mid] === num) {
      return mid;
    } else if (a[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

console.log(arr1);
console.log("Index:", binarySearch(arr1, -1));
console.log("Index:", binarySearch(arr1, -9999999));

// -----------------------------------------------------

// -------------------- Sixth task --------------------

const isPalindrome = (str) => {
  const delimiters = [" ", ",", "!", ":", "-", "."];
  const chars = str.split("").filter((c) => !delimiters.includes(c));
  const len = chars.length;

  for (let i = 0; i < len / 2; i++) {
    if (chars[i].toLowerCase() !== chars[len - 1 - i].toLowerCase())
      return false;
  }

  return true;
};

console.log(isPalindrome("Чи в окуня є янукович")); // true
console.log(isPalindrome("GroupBWT")); // false
console.log(isPalindrome("Ущипне - та шатен: пищу!")); // true
console.log(isPalindrome("A man, a plan, a canal. Panama")); // true

// -----------------------------------------------------
