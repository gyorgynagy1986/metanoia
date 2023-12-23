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
      list_2: sectionData.list_2,
      time: sectionData.time,
      time_2: sectionData.time_2,
      price: sectionData.price,
      price_2: sectionData.price_2,
      ...props
    };

    return <WrappedComponent {...sectionProps} />;
  };
};

export default withSectionProps;
