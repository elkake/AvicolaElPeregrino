
import { useNavigate } from 'react-router-dom'
export default function useNav (url = '/') {
  const navigate = useNavigate()
  const toBack = () => {
    navigate(url)
  }
  return toBack
}
