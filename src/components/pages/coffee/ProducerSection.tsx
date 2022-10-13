import InputText from "../../common/InputText";
import TextArea from "../../common/TextArea";

const ProducerSection = () => {
    return (
        <>
            <div>
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
                                        />
                                        <InputText
                                            title="Website"
                                            id="producerUrl"
                                            type="url"
                                            placeholder="www.coffee-mcproducer.com"
                                        />
                                        <InputText
                                            title="Address"
                                            id="producerAddress"
                                            type="text"
                                            placeholder="123 Bourbon Varietal St."
                                        />
                                        <TextArea
                                            title="About"
                                            id="producerInfo"
                                            placeholder="#HightAltitudeLife"
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

export default ProducerSection;
