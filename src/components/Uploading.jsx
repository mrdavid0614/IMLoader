import Spinner from "./Spinner"

function Uploading() {

  return (
    <div className="flex flex-col gap-10 items-center">
        <p className="text-2xl">Uploading image...</p>
        <Spinner/>
    </div>
  )
}

export default Uploading