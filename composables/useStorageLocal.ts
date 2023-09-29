export const useStorageLocal = () => {
  type KeyLocal = 'primary' | 'theme'

  function setLocalStorage(key: KeyLocal, value: string): void {
    localStorage.setItem(key, value)
  }
  function getLocalStorage(key: KeyLocal): string | null {
    return localStorage.getItem(key)
  }
  function removeLocalStorage(key: KeyLocal): void {
    localStorage.removeItem(key)
  }

  return {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
  }
}
