import { NextPage } from "next";
import Layout from "../../components/layout";
import LearnCollapse from "../../components/learncollapse";
import LearnSection from "../../components/learnsection";
import { trpc } from "../../utils/trpc";
import { qualities } from "../../utils/variety";

const AboutVarietiesPage: NextPage = () => {
    const { data: varieties, isLoading } = trpc.useQuery(["variety.getAll"]);


    return (
        <Layout selectedBottomTab="learn">
            <h1 className="text-4xl place-self-start font-bold p-4">
                Coffee Varieties
            </h1>
            <LearnSection title="History & Terms">
                The first coffee trees to be cultivated originated in Ethiopia,
                and this same variety, Typica, is still widely grown today. Many
                other varieties now exist, through natural mutations or
                cross-breeding. Some varieties have explicit taste
                characteristics of their own, while others take on their
                characteristics from the terroir in which they are grown, the
                way they are cultivated and the way they are processed after
                harvest.
                <br />
                <br />
                There is often confusion over the terms &apos;variety&apos; and
                &apos;varietal&apos;. Varieties are genetically distinct
                variations of a single species, in this case{" "}
                <em>Coffea Arabica</em>, that may show different characteristics
                in the tree structure, leaves or fruit. &apos;Cultivar&apos; is
                another acceptable term to use here, as this is just a
                truncation of &apos;cultivated variety&apos;.
                &apos;Varietal&apos; should be used when referring to a specific
                instance of a variety. When referring to the production of one
                farm, for example, it would be correct to say that it was one
                hundred percent Bourbon varietal.
            </LearnSection>
            <>
            { varieties && varieties.map(variety => {
                return (
                    <LearnCollapse key={variety.id} title={variety.name}>
                    <div className="card-body p-2 md:p-3">
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
                    </LearnCollapse>
                )
            })}
            </>
        </Layout>
    );
};

export default AboutVarietiesPage;
