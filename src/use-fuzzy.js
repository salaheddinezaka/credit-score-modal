import Fuse from 'fuse.js'
import { useMemo, useState } from 'react'

export default function useFuzzy(data, options) {
  const [keyword, setKeyword] = useState(() => "")
  const resetSearch = () => setKeyword("")

  const searcher = useMemo(() => {
    const defaultOptions = { tokenize: true, threshold: 0.2 }
    return new Fuse(data, { ...defaultOptions, ...options })
  }, [data, options])

  const result = searcher.search(keyword)

  return {
    keyword,
    resetSearch,
    result,
    search: setKeyword
  }
}