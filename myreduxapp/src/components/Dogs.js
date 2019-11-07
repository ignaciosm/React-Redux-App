import React from 'react';
import { connect } from 'react-redux'
import { dogsLoading, dogsLoadSuccess, fetchDogs } from '../actions';
import '../App.css';

const Dogs = (props) => {
  console.log('props.dog', props.dog)
  return (
    <>
    <h1>Puppies!</h1>
    <button onClick={()=> props.fetchDogs()}>Fetch dogs!</button>
    {props.isFetching && <div>⏰</div>}
    <div className="dogs-container">
      {props.dogs.reverse().map(p => (
        <div className="dog-card">
          <img className='img' src={p} />
        </div>
      ))}
    </div>
    </>
  )
}

const mapDispatchToProps = {
  dogsLoading,
  dogsLoadSuccess,
  fetchDogs
};
export default connect(
  state => state,
  mapDispatchToProps
)(Dogs);
