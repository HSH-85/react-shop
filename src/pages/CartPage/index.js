import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addAge, changeGroup, changeUserName, plusCount, minusCount } from "../../store";

function CartPage() {
  let userName = useSelector((state) => {
    return state.userName;
  });

  let productStock = useSelector((state) => {
    return state.productStock;
  });

  let cartData = useSelector((state) => {
    return state.cartData;
  });

  console.log(userName);
  console.log(productStock);
  console.log(cartData);

  // 스토어에 있는 변경함수 호출하는 택배기사를 생성
  let dispatch = useDispatch();
  let loggindUser = useSelector((state) => {
    return state.loggindUser;
  });
  console.log("Loggind userName = ", loggindUser);

  let imsiData = useSelector((state) => {
    return state.imsiData;
  });

  console.log(imsiData);

  return (
    <div>
      {loggindUser}님의 장바구니
      {/* {loggindUser}<button onClick={()=>{
        dispatch(changeUserName());
      }}>이름변경</button>
      {imsiData.name} : {imsiData.groupName}
      <button onClick={()=>{
        dispatch(changeGroup())
      }}>소속사</button>
      <span onClick={()=>{
        dispatch(addAge(3));
      }}>➕</span>{imsiData.age} */}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((x) => {
            return (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.title}</td>
                <td>{x.count} &nbsp;
                  <span onClick={() => {
                      dispatch(plusCount(x.id));
                    }}>
                    ➕</span>
                  <span
                    onClick={() => {
                      dispatch(minusCount(x.id));;
                    }}
                  >
                    ➖
                  </span>
                </td>

                <td>단추</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default CartPage;