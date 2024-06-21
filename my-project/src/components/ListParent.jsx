import data from "../data/Data";
import Form from "./Form";
import ListComponent from "./ListComponent";

const ParentComponent = () => {
    return (<>
      <div className="flex flex-wrap lg:w-[60%] justify-center mt-5 lg:mt-0">
        {data.map(item => (
          <ListComponent
            key={item.id}
            imageLarge={item.imageLarge}
            imageSmall={item.imageSmall}
            headingText={item.headingText}
            paragraphText={item.paragraphText}
          />
        ))}
      </div>
      <div className="mt-2  ml-12 w-2/3 block md:hidden">
        <Form />
      </div>
      </>
    );
  };
  
  export default ParentComponent;