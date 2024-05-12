import Movies from "components/TAM/Movies"
import Tvs from "components/TAM/Tvs"
import Upcoming from "components/Upcoming/Upcoming"

const HomePage = () => {
  return (
    <>
      <Upcoming/>
      <Movies/>
      <Tvs/>
    </>
  )
}

export default HomePage