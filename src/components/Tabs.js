import React, { useState, useEffect } from "react";

const Tabs = (props) => {
  const data = props.children;
  const [content, setContent] = useState("");
  const [activeTab, setActiveTab] = useState("");

  const handleClick = (item) => {
    setContent(item.props.children);
    setActiveTab(item.props.title);
  };

  useEffect(() => {
    let title = "";
    let content = "";
    if (data) {
      if (data.length > 1) {
        title = data[0]?.props?.title;
        content = data[0]?.props?.children;
      } else {
        title = data.props.title;
        content = data.props.children;
      }
      setContent(content);
      setActiveTab(title);
    }
  }, [props.children]);

  return (
    <>
      {data && data?.length && data?.length > 1 ? (
        <>
          <div className="tabs">
            {data.map((item, index) => {
              return (
                item.props.title && (
                  <button
                    key={index}
                    onClick={() => handleClick(item)}
                    className={`${item.props.title === activeTab ? "active" : "btn"}`}
                    disabled={item.props.title === activeTab}
                  >
                    {item.props.title}
                  </button>
                )
              );
            })}
          </div>
          <div className="view">{content}</div>
        </>
      ) : (
        <>
          <button
            onClick={() => handleClick(data)}
            className={"active"}
            disabled={true}
          >
            {data?.props?.title}
          </button>
          <div className="view">{content}</div>
        </>
      )}
    </>
  );
};

export default Tabs;
