import { useState } from "react";
import { trpc } from "../utils/trpc";

const AddBean: React.FC = () => {
  const { mutate } = trpc.useMutation("beans.create");

  const emptyForm = {
    country: "",
    region: "",
    process: "",
    variety: "",
    altitude: "",
    roast: ""
  }

  const [bean, setBean] = useState(emptyForm);

  return (
    <div className="grid grid-flow-row place-items-center bg-secondary">
      <form className="form-control" onSubmit={(event) => {
        event.preventDefault()
        mutate(bean)
        setBean(emptyForm)
      }}>
        <label className="label" htmlFor="country-input">Country</label>
        <input className="input input-primary" id="country-input" name="Country" value={bean.country} onChange={event => setBean({ ...bean, country: event.currentTarget.value })} />
        <label className="label" htmlFor="region-input">Region</label>
        <input className="input input-primary" id="region-input" name="Region" value={bean.region} onChange={event => setBean({ ...bean, region: event.currentTarget.value })} />
        <label className="label" htmlFor="region-input">Process</label>
        <input className="input input-primary" id="process-input" name="Process" value={bean.process} onChange={event => setBean({ ...bean, process: event.currentTarget.value })} />
        <label className="label" htmlFor="region-input">Variety</label>
        <input className="input input-primary" id="variety-input" name="Variety" value={bean.variety} onChange={event => setBean({ ...bean, variety: event.currentTarget.value })} />
        <label className="label" htmlFor="region-input">Altitude</label>
        <input className="input input-primary" id="altitude-input" name="Altitude" value={bean.altitude} onChange={event => setBean({ ...bean, altitude: event.currentTarget.value })} />
        <label className="label" htmlFor="region-input">Roast</label>
        <input className="input input-primary" id="roast-input" name="Roast" value={bean.roast} onChange={event => setBean({ ...bean, roast: event.currentTarget.value })} />
        <button className="btn btn-secondary" formAction="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddBean;