import {Variety} from "@prisma/client"
import {useState} from "react"
import {qualities} from "../utils/variety"

type VarietyDropDownProps = {
    title: string
    data: Variety[]
}

const VarietyDropDown = ({title, data}: VarietyDropDownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (<>
        <div tabIndex={0} className={`collapse collapse-arrow rounded-box w-full ${isOpen ? "collapse-open" : "collapse-close"}`} >
            <button className="w-full text-left" type="button" onClick={() => setIsOpen(val => !val)}>
                <div className="collapse-title bg-secondary">
                    {title}
                </div>
            </button>
            <div className="collapse-content bg-secondary">
                {
                    data.map(variety => {
                        return (<>
                            <div key={variety.id} className="p-3 mt-3 border-2 rounded-box border-accent-content">
                                <div className="text-primary">
                                    {variety.name}
                                    <p className="italic">{variety.description}</p>
                                </div>
                                <h2 className="mt-1 text-lg text-primary">Appearance</h2>
                                <div className="overflow-x-auto">
                                    <table className="table w-full table-fixed table-compact">
                                        <thead>
                                            <tr className="text-primary">
                                                <th className="first:!static">Stature<span></span></th>
                                                <th>Bean Size</th>
                                                <th>Leaf Tip Color</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {variety.stature ? <td>{qualities.Stature[variety.stature]}</td> : null}
                                                {variety.beanSize ? <td>{qualities.BeanSize[variety.beanSize]}</td> : null}
                                                {variety.leafTipColor ? <td>{variety.leafTipColor}</td> : null}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h2 className="mt-1 text-primary">Agronomics</h2>
                                <div className="overflow-x-auto">
                                    <table className="table w-full table-compact">
                                        <thead>
                                            <tr className="text-primary">
                                                <th className="first:!static">Qual. Pot. @ H.Y.</th>
                                                <th>Yield Potential</th>
                                                <th>Year of 1st Prod.</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {variety.qualPotHighAlt ? <td>{qualities.QualPotHighAlt[variety.qualPotHighAlt]}</td> : null}
                                                {variety.yieldPot ? <td>{qualities.YieldPotential[variety.yieldPot]}</td> : null}
                                                {variety.yearOfFirstProd ? <td>{qualities.YearFirstProd[variety.yearOfFirstProd]}</td> : null}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>)
                    })
                }
            </div>
        </div>
    </>)
}

export default VarietyDropDown
