export default function getLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    //DO NOTHING
  }
}
