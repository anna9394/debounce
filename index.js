const debounce = (callback, delay) => {
    let timeout
    console.log('here')
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        timeout = null
        callback(...args)
      }, delay)
    }
}

const nameFunction = () => {
  console.log('nameFunction')
} 

window.addEventListener('input', debounce(nameFunction, 3000))




