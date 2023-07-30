export default function clsx(...args) {
    const classNamesArr = args.map(arg => {
      if (arg === null || arg === false || typeof arg === 'undefined') {
        return [];
      }
      if (Array.isArray(arg)) {
        // Handle arrays recursively and flatten the results
        return clsx(...arg);
      }
      if (typeof arg === 'object') {
        return Object.keys(arg).filter(key => arg[key]).map(key => key);
      }
      if (typeof arg === 'string') {
        return [arg];
      }
      throw new Error('Unhandled Argument', arg);
    });
  
    // Flatten the array of class names and join them with spaces
    return classNamesArr.flat().join(' ');
  }