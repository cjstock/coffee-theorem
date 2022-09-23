import { Dispatch } from "react";
import { ACTIONTYPE } from "../../../utils/CoffeeReducer";
import Checkbox from "../../common/Checkbox";
import InputText from "../../common/InputText";
import TextArea from "../../common/TextArea";

interface SellerSectionProps {
    dispatch: Dispatch<ACTIONTYPE>;
}
const SellerSection = ({ dispatch }: SellerSectionProps) => {
    return (
        <>
            <div>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-matcha-100">
                                Seller
                            </h3>
                            <p className="mt-1 text-sm text-coffee-100">
                                Where did you buy the beans? This could be a
                                subscription service, coffee shop, or other
                                retailer. They could have also roasted the
                                beans.
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
                                            id="sellerName"
                                            type="text"
                                            placeholder="Coffee McShop"
                                            dispatch={dispatch}
                                        />
                                        <InputText
                                            title="Website"
                                            id="sellerUrl"
                                            type="url"
                                            placeholder="www.coffee-mcshop.com"
                                            dispatch={dispatch}
                                        />
                                        <InputText
                                            title="Address"
                                            id="sellerAddress"
                                            type="text"
                                            placeholder="123 Coffee St."
                                            dispatch={dispatch}
                                        />
                                        <TextArea
                                            title="About"
                                            id="sellerInfo"
                                            placeholder="They sell the best stufferino"
                                            dispatch={dispatch}
                                        />
                                        <Checkbox
                                            title="Coffee was also roasted here"
                                            id="sellerIsRoaster"
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

export default SellerSection;
