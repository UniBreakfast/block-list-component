export {prepDescriptors}

function prepDescriptors(methods) {
  const descriptors = {}

  for (const [name, method] of Object.entries(methods)) {
    descriptors[name] = { value: method, enumerable: false }
  }

  return descriptors
}
