import { Dispatch } from "react";
import { ACTIONTYPE } from "../../../utils/CoffeeReducer";
import InputText from "../../common/InputText";
import TextArea from "../../common/TextArea";

interface BrewerSectionProps {
    dispatch: Dispatch<ACTIONTYPE>;
}
const BrewerSection = ({ dispatch }: BrewerSectionProps) => {
    return (
        <>
            <div>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-matcha-100">
                                Brewer
                            </h3>
                            <p className="mt-1 text-sm text-coffee-100">
                                Who brewed the coffee when you tried it? Did you
                                brew at home? Did you order a cup of coffee from
                                your favorite local coffee shop?
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                            <div className="shadow sm:overflow-hidden sm:rounded-md">
                                <div className="space-y-6 bg-coffee-400 px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-3 gap-6">
                                        <InputText
                                            title="Name"
                                            id="brewerName"
                                            type="text"
                                            placeholder="Brewy McBrewerson"
                                            dispatch={dispatch}
                                        />
                                        <InputText
                                            title="Website"
                                            id="brewerUrl"
                                            type="url"
                                            placeholder="www.coffee-shop.com"
                                            dispatch={dispatch}
                                        />
                                        <InputText
                                            title="Address"
                                            id="brewerAddress"
                                            type="text"
                                            placeholder="123 Lovecup Way."
                                            dispatch={dispatch}
                                        />
                                        <TextArea
                                            title="About"
                                            id="brewerInfo"
                                            placeholder="Mmmmmm coffee."
                                            dispatch={dispatch}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrewerSection;
