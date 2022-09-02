import type { Variety } from "../utils/variety";
import { qualities } from "../utils/variety";

interface Props {
    variety: Variety;
}

const VarietyTables = ({ variety }: Props) => {
    return (
        <>
            <div className="divider" />
            <h2 className="font-bold">Appearance</h2>
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
                            {variety.stature && (
                                <td>{qualities.Stature[variety.stature]}</td>
                            )}
                            {variety.beanSize && (
                                <td>{qualities.BeanSize[variety.beanSize]}</td>
                            )}
                            {variety.leafTipColor && (
                                <td>{variety.leafTipColor}</td>
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="divider" />
            <h2 className="font-bold">Agronomics</h2>
            <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                    <thead>
                        <tr className="text-primary">
                            <th>Qual. Poten. @ High Alt.</th>
                            <th>Yield Poten.</th>
                            <th>Year of First Prod.</th>
                            <th>Nutrition Req.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {variety.qualPotHighAlt && (
                                <td>
                                    {
                                        qualities.QualPotHighAlt[
                                            variety.qualPotHighAlt
                                        ]
                                    }
                                </td>
                            )}
                            {variety.yieldPot && (
                                <td>
                                    {qualities.YieldPotential[variety.yieldPot]}
                                </td>
                            )}
                            {variety.yearOfFirstProd && (
                                <td>
                                    {
                                        qualities.YearFirstProd[
                                            variety.yearOfFirstProd
                                        ]
                                    }
                                </td>
                            )}
                            {variety.nutReq && (
                                <td>{qualities.NutReq[variety.nutReq]}</td>
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="divider" />
            <h2 className="font-bold">Susceptibility</h2>
            <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                    <thead>
                        <tr className="text-primary">
                            <th>Coffee Leaf Rust</th>
                            <th>Coffee Berry Disease</th>
                            <th>Nematodes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {variety.coffeeLeafRust && (
                                <td>
                                    {
                                        qualities.CoffeeLeafRust[
                                            variety.coffeeLeafRust
                                        ]
                                    }
                                </td>
                            )}
                            {variety.coffeeBerryDisease && (
                                <td>
                                    {
                                        qualities.CoffeeBerryDisease[
                                            variety.coffeeBerryDisease
                                        ]
                                    }
                                </td>
                            )}
                            {variety.nematodes && (
                                <td>
                                    {qualities.Nematodes[variety.nematodes]}
                                </td>
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default VarietyTables;
