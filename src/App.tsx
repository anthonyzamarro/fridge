import './styles.css'
import IMAGE from './owl.jpg'
import SVG from './people.svg'

export const App = () => {
  return (
    <>
      <h1>Hello, React {process.env.NODE_ENV}</h1>
      <img src={IMAGE} alt="owl" width={300} height={200} />
      <img src={SVG} alt="people" width={300} height={200} />
    </>
  )
}
