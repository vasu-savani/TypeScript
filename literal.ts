function combine(a: number | string, b: number | string, type: 'as-string' | 'as-number'){
    if (type === 'as-number'){
      return (+a) + (+b);
    } else {
      return a.toString() + b.toString();
    }
  }
  
  console.warn(combine(10, 20, 'as-number'));
  console.warn(combine("vasu", "savani",'as-string'));
  