import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGreetings } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const getGreetingAction = bindActionCreators(getGreetings, dispatch);
  const greeting = useSelector((state) => state.greeting);
  useEffect(() => {
    getGreetingAction();
    return () => null;
  }, []);

  return <h2>{greeting.messages}</h2>;
};

export default Greeting;
