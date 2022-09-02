import type { Variety } from "../utils/variety";
import { qualities } from "../utils/variety";

interface Props {
    variety: Variety;
}

const VarietyTables = ({ variety }: Props) => {
    return (
        <>
            <h2 className="mt-1 font-bold">Appearance</h2>
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
            <h2 className="mt-1 font-bold">Agronomics</h2>
            <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                    <thead>
                        <tr className="text-primary">
                            <th>Qual. Poten. @ High Alt.</th>
                            <th>Yield Poten.</th>
                            <th>Coffee Leaf Rust</th>
                            <th>Coffee Berry Disease</th>
                            <th>Nematodes</th>
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
                            {variety.nematodes && <td>{variety.nematodes}</td>}
                            {variety.yearOfFirstProd && (
                                <td>{variety.yearOfFirstProd}</td>
                            )}
                            {variety.nutReq && <td>{variety.nutReq}</td>}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default VarietyTables;
