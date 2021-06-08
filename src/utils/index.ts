
interface Utils {
  coming: any[],
  clearComing: () => void,
}
const utils: Utils = {
  coming: [],
  clearComing() {
    this.coming.forEach(fn => {
      try {
        fn && fn()
      }
      catch (e) {}
    })
    this.coming = []
  }
}

export default utils