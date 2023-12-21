import React from 'react';

const withSectionProps = (WrappedComponent, sectionData, photo, styleMody) => {
  return (props) => {
    const sectionProps = {
      styleMody,
      photo,
      h2: sectionData.h2,
      h3: sectionData.h3,
      h3_2: sectionData.h3_2,
      h3_3: sectionData.h3_3,
      text: sectionData.text,
      list: sectionData.list,
      time: sectionData.time,
      time_2: sectionData.time_2,
      price: sectionData.price,
      price_2: sectionData.price_2,
      price_3: sectionData.price_3,

      ...props
    };

    return <WrappedComponent {...sectionProps} />;
  };
};

export default withSectionProps;
