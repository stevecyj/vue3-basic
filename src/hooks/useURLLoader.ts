import axios from "axios"

interface IData {
  result: any
  loading: boolean
  error: any
}

const useURLLoader = (url: string) => {
  const data: IData = reactive({
    result: null,
    loading: true,
    error: null,
  })
  axios
    .get(url)
    .then((rawData) => {
      data.result = rawData.data
    })
    .catch((e) => {
      data.error = e
    })
    .finally(() => {
      data.loading = false
    })
  return toRefs(data)
}

export default useURLLoader
