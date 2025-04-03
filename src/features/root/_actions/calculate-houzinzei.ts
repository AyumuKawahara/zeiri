const HOUZINZEI_RATE = 0.15315

export const calculateHouzinzei = async (
  _prevState: any,
  formData: FormData,
) => {
  const uketoriRisoku = formData.get('uketoriRisoku') as string

  return {
    value: (Number(uketoriRisoku) * HOUZINZEI_RATE) / (1 - HOUZINZEI_RATE),
    prevData: {
      uketoriRisoku,
    },
  }
}
