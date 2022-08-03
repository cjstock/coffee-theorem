import { Variety } from "@prisma/client"
import { qualities } from "../utils/variety"

type DropDownProps = {
    title: string
    data: Variety[]
}

const DropDown = ({ title, data }: DropDownProps) => {
    return (<>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-100 rounded-box w-full">
            <input type={"checkbox"} className="peer" />
            <div className="collapse-title
                bg-primary text-primary-content
                peer-checked:bg-secondary peer-checked:text-secondary-content">
                {title}
            </div>
            <div className="collapse-content
                bg-primary text-primary-content
                peer-checked:bg-secondary peer-checked:text-secondary-content">
                {
                    data.map(variety => {
                        return (<>
                            <div className="card card-bordered border-accent-content mt-3">
                                <div className="card-body p-2 md:p-3">
                                    <h1 className="card-title text-primary">{variety.name}</h1>
                                    <p className="italic">{variety.description}</p>
                                    <h2 className="mt-1 text-primary">Appearance</h2>
                                    <div className="overflow-x-auto">
                                        <table className="table w-full table-compact">
                                            <thead>
                                                <tr className="text-primary">
                                                    <th>Stature</th>
                                                    <th>Bean Size</th>
                                                    <th>Leaf Tip Color</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {variety.stature && <td>{qualities.Stature[variety.stature]}</td>}
                                                    {variety.beanSize && <td>{qualities.BeanSize[variety.beanSize]}</td>}
                                                    {variety.leafTipColor && <td>{variety.leafTipColor}</td>}
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </>)
                    })
                }
            </div>
        </div>
    </>)
}

export default DropDown