import { motion } from "framer-motion";
import InputText from "../../common/InputText";
import TextArea from "../../common/TextArea";
import { useCoffee, useCoffeeDispatch } from '../../../utils/CoffeeContext';

const RoasterSection = () => {
    const state = useCoffee();
    const dispatch = useCoffeeDispatch();
    return <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} exit={{ opacity: 0 }}>
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-matcha-100">
                        Roaster
                    </h3>
                    <p className="mt-1 text-sm text-coffee-100">
                        Where was the coffee roasted? Many coffee shops
                        roast their own beans.
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
                                    id="roasterName"
                                    type="text"
                                    placeholder="Roasty McRoasterson"
                                    value={state.roaster.name}
                                    handleChange={(e) => dispatch({ type: "HANDLE ROASTER INPUT", field: "name", payload: e.currentTarget.value })}
                                />
                                <InputText
                                    title="Website"
                                    id="roasterUrl"
                                    type="url"
                                    placeholder="www.coffee-mcroasterson.com"
                                    value={state.roaster.url || ""}
                                    handleChange={(e) => dispatch({ type: "HANDLE ROASTER INPUT", field: "url", payload: e.currentTarget.value })}
                                />
                                <InputText
                                    title="Address"
                                    id="roasterAddress"
                                    type="text"
                                    placeholder="123 Roaster St."
                                    value={state.roaster.address || ""}
                                    handleChange={(e) => dispatch({ type: "HANDLE ROASTER INPUT", field: "address", payload: e.currentTarget.value })}
                                />
                                <TextArea
                                    title="About"
                                    id="roasterInfo"
                                    placeholder="The roast it so good."
                                    value={state.roaster.info || ""}
                                    handleChange={(e) => dispatch({ type: "HANDLE ROASTER INPUT", field: "info", payload: e.currentTarget.value })}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </motion.div>
};

export default RoasterSection;
