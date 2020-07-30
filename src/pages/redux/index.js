import React from "react";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider, connect } from "react-redux";
import redux from "./redux.png";
import nonRedux from "./non-redux.png";
import * as api from "./util";

const readme = (
  <div>
    <h2>Redux tutorial page</h2>
    <ul>
      <li>
        whole application state is stored inside one object called redux{" "}
        <b>redux store</b>
      </li>
      <li>
        only way to change store state is by <b>dispatching action</b>
      </li>
      <li>
        then you will have reducer which will listen to this <b>action</b> and
        contain logic to update state s1 to s2 depending on action.
      </li>
      <li>
        this way, your whole application state is kept inside a{" "}
        <b>single centralized store</b> and this becomes a single source of
        truth
      </li>
    </ul>

    <h4>Other points</h4>
    <ul>
      <li>
        instead of keeping all the state in a global store(redux).. you can keep
        those state local to component where it is required
      </li>
      <li>
        keeping state local to component where required might be better pattern,
        it is much simpler
      </li>
      <li>
        if you need some data that has to be shared among components, then you
        can use centralized state using lighter alternative like{" "}
        <b>react context</b>
      </li>
      <li>redux brings a lot of boilerplate and little complexity in code</li>
      <li>
        recently redux has brought some tool like <b>redux toolkit</b> which
        ease the above problem{" "}
      </li>
    </ul>

    <h4>Redux Way</h4>
    <img src={redux} />

    <h4>Non Redux Way</h4>
    <img src={nonRedux} />
  </div>
);

// initial store state
const initialStoreState = {
  brands: {
    loading: false,
    data: null,
    error: null,
  },
  agencies: {
    loading: false,
    data: null,
    error: null,
  },
};

//Reducer
const myReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BRAND_REQUEST":
      return { ...state, brands: { ...state.brands, loading: true } };

    case "FETCH_BRAND_SUCCESS":
      return {
        ...state,
        brands: {
          ...state.brands,
          loading: false,
          data: action.payload,
          error: null,
        },
      };

    case "FETCH_BRAND_ERROR":
      return {
        ...state,
        brands: {
          ...state.brands,
          loading: false,
          data: null,
          error: action.payload,
        },
      };

    case "FETCH_AGENCY_REQUEST":
      return { ...state, agencies: { ...state.agencies, loading: true } };

    case "FETCH_AGENCY_SUCCESS":
      return {
        ...state,
        agencies: {
          ...state.agencies,
          loading: false,
          data: action.payload,
          error: null,
        },
      };

    case "FETCH_AGENCY_ERROR":
      return {
        ...state,
        agencies: {
          ...state.agencies,
          loading: false,
          data: null,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

//store
const store = createStore(
  myReducer,
  initialStoreState,
  compose(
    // applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//Brands component
const Brands = (props) => {
  const { fetchBrands, data, loading, error } = props;
  const brandsState = JSON.stringify({ data, loading, error });

  if (loading) {
    return <div>brands are loading...</div>;
  }
  return (
    <div style={{ border: "1px solid black" }}>
      <h4>Brands component</h4>
      <div>Brands state: {brandsState}</div>
      <button onClick={fetchBrands}>Fetch brands</button>
    </div>
  );
};

//store dispatch, state
//connect brands component to redux store
const brandsmapStateToProps = (state) => ({
  data: state.brands.data,
  loading: state.brands.loading,
  error: state.brands.error,
});
const brandsmapDispatchToProps = (dispatch) => ({
  fetchBrands: async () => {
    dispatch({ type: "FETCH_BRAND_REQUEST" });
    const data = await api.fetchBrands();
    dispatch({ type: "FETCH_BRAND_SUCCESS", payload: data });
  },
});
const ConnectedBrands = connect(
  brandsmapStateToProps,
  brandsmapDispatchToProps
)(Brands);

//Agencies component
const Agencies = (props) => {
  const { fetchAgencies, data, loading, error } = props;
  const agenciesState = JSON.stringify({ data, loading, error });
  return (
    <div style={{ border: "1px solid black" }}>
      <h4>Agencies component</h4>
      <div>Agencies state: {agenciesState}</div>
      <button onClick={fetchAgencies}>Fetch agencies</button>
    </div>
  );
};

//connect agencies component to redux store
const agenciesmapStateToProps = (state) => ({
  data: state.agencies.data,
  loading: state.agencies.loading,
  error: state.agencies.error,
});
const agenciesmapDispatchToProps = (dispatch) => ({
  fetchAgencies: async () => {
    dispatch({ type: "FETCH_AGENCY_REQUEST" });
    const data = await api.fetchAgencies();
    dispatch({ type: "FETCH_AGENCY_SUCCESS", payload: data });
  },
});
const ConnectedAgencies = connect(
  agenciesmapStateToProps,
  agenciesmapDispatchToProps
)(Agencies);

function ReduxPage() {
  return (
    <Provider store={store}>
      <div>
        {readme}
        <ConnectedBrands />
        <ConnectedAgencies />
      </div>
    </Provider>
  );
}

export default ReduxPage;
