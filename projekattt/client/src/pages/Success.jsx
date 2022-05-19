import {useHistory} from "react-router-dom";

const Success = () => {


  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }

  const handleClick = ()=>{
    routeChange();
    }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Vaša porudžbina je uspješno kreirana. 
      {/* {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`} */}
      <button style={{ padding: 10, marginTop: 20 }} onClick={handleClick}>POČETNA STRANA</button>
    </div>
  );
};

export default Success;