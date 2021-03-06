import react, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import ResultOrder from "./ResultOrder";
import queryString from "query-string";
import { getOrderInfo } from "../../Redux/confirmOrder-reducer";

const ResultOrderContainer = ({
  currentModel,
  addParams,
  startDate,
  confirmData,
  getOrderInfo,
  orderData,
}) => {
  let history = useHistory();

  useEffect(() => {
    if (confirmData.length !== 0) {
      const location = history.location.pathname;
      const orderId = confirmData.data.id;
      const searchString = `?orderId=${orderId}`;
      history.push(`${location}${searchString}`);
      getOrderInfo(orderId);
    }
  }, [confirmData]);

  return (
    <ResultOrder
      {...{
        currentModel,
        addParams,
        startDate,
        confirmData,
        getOrderInfo,
        orderData,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  currentModel: state.model.currentModel,
  addParams: state.model.additionalParameters,
  startDate: state.model.startDate,
  confirmData: state.confirm.confirmData,
  orderData: state.confirm.orderData,
});

export default connect(mapStateToProps, { getOrderInfo })(ResultOrderContainer);
