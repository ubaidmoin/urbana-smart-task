export const verifyEmail = (value: string) => {
  const emailRex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (emailRex.test(value)) {
    return true
  }
  return false
}

export const verifyPhoneNumber = (value: string) => {
  if (/^(?=.*[0-9])[- +()0-9]+$/gm.test(value)) {
    return true
  }
  return false
}

export const verifyLandlineNumber = (value: string) => {
  if (/^(?=.*[0-9])[- +()0-9]+$/gm.test(value)) {
    return true
  }
  return false
}
