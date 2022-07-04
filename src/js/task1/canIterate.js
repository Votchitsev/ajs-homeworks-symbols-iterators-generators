export default function canIterate(object) {
  try {
    const objectPrototype = Object.getPrototypeOf(object);
    if (objectPrototype[Symbol.iterator]) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
