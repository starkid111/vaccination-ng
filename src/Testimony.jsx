import Bottle from "./images/bottle.png";


const Testimony = (props) => {
  return (
    <div className="lg:-mt-24 h-[283px] lg:h-[400px] max-w-[400px]">
    <div className=" h-full"   style={{ backgroundImage: `url(${Bottle})`, backgroundPosition: 'center' , backgroundRepeat: "no-repeat" , backgroundSize : 'contain' }}>
        <div className="h-full  flex justify-center items-center">
      <div className="p-6  space-y-7  rounded-2xl h-[80%] lg:h-[60%] " style={{backgroundColor :props.bgcolor}}>
        <div className="flex items-center gap-5">
          <img src={props.image} alt="" />
          <div>
            <h1 className="text-[14px] md:text-2xl font-bold " style={{color : props.Hcolor}}>{props.Tname}</h1>
            <p className="text-[10px] md:text-sm  font-bold" style={{color : props.color}}>{props.location}</p>
          </div>
        </div>
        <p className="text-center text-sm md:text-[18px] font-medium" style={{color : props.color}}> 
          {props.description}
        </p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Testimony;
