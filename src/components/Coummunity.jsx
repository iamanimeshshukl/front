import React from "react";

const ZenherCheckout = () => {
  return (
    <iframe
      title="ZENHER checkout widget"
      src="https://nas.io/checkout-widget?communityCode=ZENHER&communitySlug=%2Fzenher&buttonText=Join%20as%20member&buttonTextColorHex=%23000&buttonBgColorHex=%2307f59d&widgetTheme=light&backgroundColorHex=%23fff"
      width="100%"
      height="320"
      frameBorder="0"
      referrerPolicy="no-referrer"
      style={{ border: "none" }}
    ></iframe>
  );
};

export default ZenherCheckout;
