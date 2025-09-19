import ChildC from "./ChildC"

const ChildB = () => {
  return (
    <div className="bg-sky-300">
        <p>im in childB</p>
        <br />
       <ChildC/>
    </div>
  )
}

export default ChildB