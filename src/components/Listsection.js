import * as React from "react";

const Listsection = (props) => {
  return (
    <div style={{ backgroundColor: "lightblue", textAlign: "left" }}>
      {props.data && props.data.length > 0 ? (
        props.data.map((ele, index) => {
          return (
            //didnt understand the code//
            <div key={ele.name + index}>
              <p
              style = {{
                textDecoration: ele.status === true ? "line-through" : ""
                }}
              >
                                  
                {index + 1})&nbsp;&nbsp;{ele.name.toUpperCase()}
                {ele.status === true ? (
                  <img
                    src="https://image.pngaaa.com/706/896706-middle.png"
                    alt="Basics Fanon Wiki - Internet Explorer Stop Icon Png,Delete Png - free transparent  png images - pngaaa.com"
                    style={{ width: 20, height: 20 }}
                    onClick={() => props.dataRemove(index)}
                  />
                ) : (
                  <img
                    src={
                      "https://png.pngtree.com/png-clipart/20191017/ourmid/pngtree-3d-green-check-icon-png-image_1772786.jpg"
                    }
                    alt="Tick PNG Images | Vector and PSD Files | Free Download on Pngtree"
                    style={{ width: 20, height: 20 }}
                    onClick={() => props.dataRemove(index)}
                  />
                )}
              </p>  
            </div>
          );
        })
      ) : (
        <p> no items in the list</p>
      )}
    </div>
  );
};
export default Listsection;
