export default function cleanPhoneNumber(phone: string) {
  // +55 (71) 996676616
  let phoneNumberClean = phone.replace(/[^\d]+/g, '');
  // 71996676616

  if (phoneNumberClean.length === 10 || phoneNumberClean.length === 11) {
    phoneNumberClean = '+55' + phoneNumberClean;
  } else {
    phoneNumberClean = '+' + phoneNumberClean;
  }

  return phoneNumberClean;
}