export { buildOption }

function buildOption(option) {
  const { value, label } = option

  return `<option value="${value}">${label}</option>`
}
