import InputText from "../../common/InputText";
import TextArea from "../../common/TextArea";
import { useCoffee, useCoffeeDispatch } from '../../../utils/CoffeeContext';
import { motion } from "framer-motion";
import Divider from "./Divider";

const ProducerSection = () => {
    const state = useCoffee();
    const dispatch = useCoffeeDispatch();
    return <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} exit={{ opacity: 0 }}>
        <Divider />
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-matcha-100">
                        Producer
                    </h3>
                    <p className="mt-1 text-sm text-coffee-100">
                        Where was the coffee produced? This could be a
                        large company, or a single farm. The primary
                        group responsible for everything up until
                        roasting.
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
                                    id="producerName"
                                    type="text"
                                    placeholder="Bean McProducerino"
                                    value={state.producer.name}
                                    handleChange={e => dispatch({ type: "HANDLE PRODUCER INPUT", field: "name", payload: e.currentTarget.value })}
                                />
                                <InputText
                                    title="Website"
                                    id="producerUrl"
                                    type="url"
                                    placeholder="www.coffee-mcproducer.com"
                                    value={state.producer.url || ""}
                                    handleChange={e => dispatch({ type: "HANDLE PRODUCER INPUT", field: "url", payload: e.currentTarget.value })}
                                />
                                <InputText
                                    title="Address"
                                    id="producerAddress"
                                    type="text"
                                    placeholder="123 Bourbon Varietal St."
                                    value={state.producer.address || ""}
                                    handleChange={e => dispatch({ type: "HANDLE PRODUCER INPUT", field: "address", payload: e.currentTarget.value })}
                                />
                                <TextArea
                                    title="About"
                                    id="producerInfo"
                                    placeholder="#HightAltitudeLife"
                                    value={state.producer.info || ""}
                                    handleChange={e => dispatch({ type: "HANDLE PRODUCER INPUT", field: "info", payload: e.currentTarget.value })}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </motion.div>
};

export default ProducerSection;
